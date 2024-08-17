import React, { Component } from 'react'
import Header from '../../components/common/Header';
import withRouter from '../../withRouter';
import { Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Notification from '../../RestAPI/Notification';
import RestClient from "../../RestAPI/RestClient"
import AppUrl from "../../RestAPI/AppUrl"

class Login extends Component {

  constructor(props){
    super(props);
  }

  handleSubmit = (values,{resetForm,setSubmitting}) => { 
    const {navigate} = this.props;

    RestClient.postRequest(AppUrl.login,values).then((res) => {
      const status = res.status;
      const result = res.data;

      if(status === 200){ 
        let userData = {
          id    : result.data.id,
          name  : result.data.name,
          email : result.data.email,
          access_token : result.data.access_token
        };

        let appState = {
            isLoggedIn : true,
            user : userData,
        };

        this.props.AuthStore.saveToken(appState);
        Notification.success(result);
        resetForm();
        setSubmitting(false);
        navigate("/");

      }else { 
        if(status === 422){ 
          Notification.error(result);
          setSubmitting(false);
        }else if(status === 401){
          Notification.error(result);
          setSubmitting(false);
        }else{
          Notification.error(result);
          setSubmitting(false);
        }
      }



    }).catch((err) => {
      console.log(err);
      Notification.error({
        title:"Başarısız",
        text:"E-Posta veya Şifre Kontrol Ediniz."
      })
      setSubmitting(false);
    })

  }



  render() {
    return (
      <>
      <Header/>
      <Container>
        <Row className={"d-flex justify-content-center mt-5"}>
          <Col md={10}>
          <Card>
            <Card.Header>Giriş Yap</Card.Header>
            <Card.Body>
            <Formik initialValues={{
              email:'',
              password:'',
            }} validationSchema={Yup.object().shape({
              email : Yup.string().required("E-Posta Alanı Gereklidir.").email("Lütfen Geçerli Bir E-Posta Adresi Giriniz."),
              password : Yup.string().required("Şifre Alanı Gereklidir.").min(8,"Şifre En Az 8 Karakter Olmak Zorundadır.").max(16,"Şifre En Fazla 16 Karakter Olmak Zorundadır."),
            })} onSubmit={this.handleSubmit}>
              {({values,touched,errors,handleChange,handleSubmit,handleBlur,isValid,isSubmitting}) => (
              <Form>
                <Form.Group>
                  <Form.Label>E-Posta Adresi</Form.Label>
                  <Form.Control name={"email"} value={values.email} onChange={handleChange('email')} onBlur={handleBlur} type="text" placeholder="E-Posta Adresi" />
                  {(errors.email && touched.email) && <small style={{color:"red"}}>{errors.email}</small>}
                </Form.Group>

                <Form.Group className={"mt-3"}>
                  <Form.Label>Şifre</Form.Label>
                  <Form.Control type="password" value={values.password} name={"password"} onChange={handleChange('password')} placeholder="Şifre" />
                  {(errors.password && touched.password) && <small style={{color:"red"}}>{errors.password}</small>}
                </Form.Group>
                <Button disabled={(!isValid || isSubmitting)} onClick={handleSubmit} variant="success" className={"mt-3"} type="button">
                  Giriş Yap
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

export default withRouter(inject("AuthStore")(observer(Login)));