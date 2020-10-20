import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckOutSteps from '../components/CheckOutSteps';

import { saveShippingAddress } from '../actions/cartActions';

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);

  const { shippingAddress } = cart;

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push('/payment');
  };

  return (
    <FormContainer>
      <CheckOutSteps step1 step2 />
      <h1>Detalhes de Entrega</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='endereço'>
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            type='text'
            required
            placeholder='Digite seu endereço completo'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            type='text'
            required
            placeholder='Digite a cidade'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label>CEP</Form.Label>
          <Form.Control
            type='text'
            required
            placeholder='Digite o CEP'
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>País</Form.Label>
          <Form.Control
            type='text'
            required
            placeholder='Digite o País'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Próximo passo
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
