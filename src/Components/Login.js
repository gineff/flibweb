import React, {useState} from 'react';
import {Form, Button, Container, Col, Row} from 'react-bootstrap';
import * as Realm from "realm-web";
import { useRealmApp } from "../RealmApp";
import qs from 'qs';
const axios = require('axios').default;
const proxyCorsUrl ="https://api.allorigins.win/raw?url=";
//import axios from 'axios';

/*
axios.post('http://localhost:5000/api/auth/login',{ userEmail, userPassword },{
  withCredentials: true,
})
*/

export default ({state, setState})=> {

  const [credentials, setCredentials] = useState({});
  const [error, setError] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();
    //setIsLoggingIn(true);
    //setError((e) => ({ ...e, password: null }));
    let {name, pass} = credentials;



    const data = {
      op: "Вход в систему",
      form_build_id: "form-GcTKe8gMcDO-nLJcsz3f6Mq3oV57l5uw121QF_Pmwfo",
      form_id: "user_login_block"
    };
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({...data, ...credentials}),
      url: proxyCorsUrl+encodeURIComponent('http://flibusta.is'),
    };

    axios(options).then(({data})=> console.log(data)).catch((err)=> {
      console.log(err);
     // handleAuthenticationError(err, setError);
    })
  };



  return      (<Container id="sign-in-form" fluid="md">
      <Row className="justify-content-center">
      <Col md={6}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div>Для авторизации введите свой логин и пароль flibusta</div>
            <Form.Label>Your name</Form.Label>
            <Form.Control type="text"
                          onChange={(e)=>setCredentials({...credentials, name:e.target.value})}
                          placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
                          onChange={(e)=>setCredentials({...credentials, pass:e.target.value})}
                          placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleLogin}>
            Submit
          </Button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </Form>
        <div><a href="http://flibusta.is/register">Регистрация на сайта Флибусты </a></div>
      </Col>
      </Row>
    </Container>)
}
