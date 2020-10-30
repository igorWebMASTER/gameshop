import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';

const Products = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-Br', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <Card className='my-3 p-3 rounded hover-product--list'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body style={{ padding: '0.5em 0' }}>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong
              style={{
                fontSize: '14px',
                color: '#444',
                fontWeight: '700',
              }}
            >
              {product.name.toUpperCase()}
            </strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} avaliações`}
          />
        </Card.Text>
        <Card.Text as='h3' style={{ color: '#222' }}>
          {formatPrice(product.price)}
        </Card.Text>
        <Link to={`/product/${product._id}`}>
          <Button
            variant='success'
            className='btn-md btn-block'
            style={{
              backgroundColor: '#0BCBFF',
              border: '1px solid',
              textDecoration: 'none',
            }}
          >
            ADICIONAR PRODUTO
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Products;
