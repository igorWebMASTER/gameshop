import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Bem vindo a Gameshop',
  description: 'Nós vendemos os melhores produtos!',
  keywords:
    'eletronicos, comprar eletronicos, comprar celulares, comprar notebook',
};

export default Meta;
