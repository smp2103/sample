import { Coupons } from '../../common';

const couponsData = {
  uri: '/coupons',
  handleResponse: () => {
    const data = Coupons;

    return {
      data,
    };
  },
};

export default couponsData;
