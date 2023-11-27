import { Categories, Coupons, Products } from '../../../mock';

import { createServer } from 'miragejs';
import { useControlModal, useFetchData } from './hooks';

createServer({
  routes() {
    this.get('/api/categories', () => ({
      categories: Categories,
    }));
    this.get('/api/coupons', () => ({
      coupons: Coupons,
    }));
    this.get('/api/products', () => ({
      products: Products,
    }));
  },
});

export const useOrderController = () => {
  const { categories, products, coupons } = useFetchData();

  const { openProductOrderModal, openDiscountModal, openReceipt } = useControlModal(coupons);

  return {
    categories,
    products,
    coupons,
    openProductOrderModal,
    openDiscountModal,
    openReceipt,
  };
};
