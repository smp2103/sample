import { Categories } from '../../common';

const categoriesData = {
  uri: '/categories',
  handleResponse: () => {
    const data = Categories;

    return {
      data,
    };
  },
};

export default categoriesData;
