import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckOutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>Logar</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disable> Logar</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>Entrega</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disable> Entrega</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>Pagamento</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disable> Pagamento</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>Finalizar pedido</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disable>Finalizar pedido</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckOutSteps;
