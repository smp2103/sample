import { Products } from '../../common';

const productsData = {
  uri: '/products',
  handleResponse: () => {
    const data = Products;

    return {
      data,
    };
  },
};

export default productsData;
