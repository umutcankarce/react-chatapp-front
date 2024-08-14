import React, { Component } from 'react'
import Header from '../../components/common/Header';
import withRouter from '../../withRouter';
import { Container,Row,Col,Card,Form,Button} from 'react-bootstrap';
import { inject, observer } from 'mobx-react';

class Login extends Component {
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
            <Form>
              <Form.Group>
                <Form.Label>E-Posta Adresi</Form.Label>
                <Form.Control type="text" placeholder="E-Posta Adresi" />
              </Form.Group>

              <Form.Group className={"mt-3"}>
                <Form.Label>Şifre</Form.Label>
                <Form.Control type="password" placeholder="Şifre" />
              </Form.Group>
              <Button variant="success" className={"mt-3"} type="button">
                Giriş Yap
              </Button>
            </Form>
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