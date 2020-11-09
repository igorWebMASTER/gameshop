import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate: React.FC = (pages, page, isAdmin = false, keyword = '') => {
  return pages > 1 && <Pagination>{[...Array(pages).key]}</Pagination>;
};

export default Paginate;
