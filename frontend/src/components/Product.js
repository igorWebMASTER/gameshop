import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Products = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-Br', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong style={{ fontSize: '14px' }}>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} avaliações`}
          />
        </Card.Text>
        <Card.Text as='h3'>{formatPrice(product.price)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Products;
