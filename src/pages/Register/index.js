import React, { Component } from 'react'
import Header from '../../components/common/Header'
import withRouter from '../../withRouter';
import { Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Notification from "../../RestAPI/Notification";

class Register extends Component {

  constructor(props){ 
    super(props);
  }

  handleSubmit = (values,{resetForm,setSubmitting}) => { 
    const {navigate} = this.props;
    RestClient.postRequest(AppUrl.register,values).then((res) => { 
      const status = res.status;
      const result = res.data;

      if(status ===201){ 
        resetForm();
        setSubmitting(false);
        Notification.success(result);
        navigate("/login");
      }else {
        if(status ===422){
          setSubmitting(false);
          Notification.error(result);
        }else { 
          setSubmitting(false);
          Notification.error(result);
        }
      }

    }).catch((err) => {
      console.log(err);
      Notification.error({
        title: "Başarısız",
        text: "Bir Hata Oluştu.Lütfen Tekrar Deneyiniz."
      })
    })
  }

  render() {
    return (
      <>
         <Header />
         <Container>
        <Row className={"d-flex justify-content-center mt-5"}>
          <Col md={10}>
          <Card>
            <Card.Header>Kayıt Ol</Card.Header>
            <Card.Body>
              <Formik initialValues={{
                name:'',
                email:'',
                password:'',
                password_confirmation:''
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required("Ad Soyad Alanı Gereklidir."),
                email: Yup.string().required("E-Posta Adresi Alanı Gereklidir.").email("Lütfen Geçerli Bir E-Posta Adresi Giriniz."),
                password: Yup.string().required("Şifre Alanı Gereklidir.").min(8,"Şifre En Az 8 Karakter Olmak Zorundadır.").max(16,"Şifre En Fazla 16 Karakter Olmak Zorundadır."),
                password_confirmation:Yup.string().required("Şifre Tekrar Alanı Gereklidir.").min(8,"Şifre En Az 8 Karakter Olmak Zorundadır.").max(16,"Şifre En Fazla 16 Karakter Olmak Zorundadır.").oneOf([Yup.ref("password"),null],"Şifreler Uyuşmuyor.")
              })}
              onSubmit={this.handleSubmit}>
              {({values,touched,errors,handleChange,handleSubmit,handleBlur,isValid,isSubmitting}) => (
              <Form>
                <Form.Group>
                  <Form.Label>Ad Soyad</Form.Label>
                  <Form.Control name={"name"} value={values.name} onChange={handleChange('name')} onBlur={handleBlur} type="text" placeholder="Ad Soyad" />
                {(errors.name && touched.name) && <small style={{color:"red"}}>{errors.name}</small>}
                </Form.Group>

                <Form.Group className={"mt-3"}>
                  <Form.Label>E-Posta Adresi</Form.Label>
                  <Form.Control name={"email"} value={values.email} onChange={handleChange('email')} onBlur={handleBlur} type="text" placeholder="E-Posta Adresi" />
                  {(errors.email && touched.email) && <small style={{color:"red"}}>{errors.email}</small>}
                </Form.Group>

                <Form.Group className={"mt-3"}>
                  <Form.Label>Şifre</Form.Label>
                  <Form.Control name={"password"} value={values.password} onChange={handleChange('password')} onBlur={handleBlur} type="password" placeholder="Şifre" />
                  {(errors.password && touched.password) && <small style={{color:"red"}}>{errors.password}</small>}
                </Form.Group>

                <Form.Group className={"mt-3"}>
                  <Form.Label>Şifre (Tekrar)</Form.Label>
                  <Form.Control name={"password_confirmation"} value={values.password_confirmation} onChange={handleChange('password_confirmation')} onBlur={handleBlur} type="password" placeholder="Şifre (Tekrar)" />
                  {(errors.password_confirmation && touched.password_confirmation) && <small style={{color:"red"}}>{errors.password_confirmation}</small>}
                </Form.Group>

                <Button disabled={(!isValid || isSubmitting)} onClick={handleSubmit} variant="success" className={"mt-3"} type="button">
                  Kayıt Ol
                </Button>
              </Form>
              )}
              </Formik>
           
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
      </>
    )
  }
}

export default withRouter(inject("AuthStore")(observer(Register)));