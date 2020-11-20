import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import Loader from '../Loader';
import Message from '../Message';
import { useDispatch, useSelector } from 'react-redux';
import { listTopProducts } from '../../actions/productActions';
import './style.css';

const TopProducts = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, []);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Container>
      <div className='top-products--home'>
        {products.map((product) => (
          <div className='top-products--container'>
            <div>
              <Link to={`/product/${product._id}`}>
                <Image src={product.image} alt={product.name} fluid />
              </Link>
            </div>
            <div>
              <span>
                {' '}
                <span> {product.category}</span> <br />
                <span>{product.description.substring(0, 50)}...</span> <br />
                <button>COMPRAR</button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TopProducts;
