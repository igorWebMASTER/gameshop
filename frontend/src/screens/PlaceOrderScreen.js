import React, { useEffect } from 'react';
import {
  Form,
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import CheckOutSteps from '../components/CheckOutSteps';
import { createOrder } from '../actions/orderActions';

import { Link } from 'react-router-dom';

const PlaceOrder = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  // Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);

  cart.taxPrice = addDecimals(Number(0.15 * cart.itemsPrice).toFixed(2));

  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <>
      <CheckOutSteps step1 step2 step3 step4 />

      <Row>
        <Col md={8}>
          <ListGroup variant='bo'>
            <ListGroup.Item>
              <h2>Entrega</h2>
              <p>
                <strong>Endereço:</strong>
                {cart.shippingAddress.address} , {cart.shippingAddress.city} ,{' '}
                {cart.shippingAddress.city}
                {cart.shippingAddress.postalCode} ,{' '}
                {cart.shippingAddress.address}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Forma de pagamento</h2>
              <p>
                <strong>Método:</strong>
                {cart.paymentMethod}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Itens do Pedido</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Seu carrinho está vazio</Message>
              ) : (
                <ListGroup>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={2}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>

                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>

                        <Col md={5}>
                          {item.qty} x R${item.price} = {item.qty} * R$
                          {item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup.Item>
              <h2>Resumo do Pedido</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Items</Col>
                <Col>R$ {cart.itemsPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Entrega</Col>
                <Col>R$ {cart.shippingPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Taxas</Col>
                <Col>R$ {cart.taxPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Total</Col>
                <Col>R$ {cart.totalPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              {error && <Message variant='danger'>{error}</Message>}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disbled={cart.cartItems === 0}
                onClick={placeOrderHandler}
              >
                Finalizar pedido
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrder;
