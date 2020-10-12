import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Image, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions';

const LoginScreen = ({ location }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfor } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const submitHandler = (e) => {
    e.preventDefault();
    //DISPATCH LOGIN
  };

  return (
    <FormContainer>
      <h1>Logar</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Endereço de Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Digite seu email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type='email'
            placeholder='Digite sua senha'
            value={email}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Logar
        </Button>

        <Row className='py-3'>
          Novo Cliente?{' '}
          <Link
            to={redirect ? `/register?redirect=${redirect}` : '/register  '}
          >
            Registrar
          </Link>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default LoginScreen;
