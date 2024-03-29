import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import { listProducts } from '../actions/productActions';
import Message from '../components/Message';
import Meta from '../components/Meta';
import ProductCarousel from '../components/ProductCarousel';
import TopProducts from '../components/TopProducts';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <>
          <ProductCarousel />
          <TopProducts />
        </>
      ) : (
        <Link to='/' className='btn btn-light'>
          Voltar{' '}
        </Link>
      )}
      <h1>Últimos produtos</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
