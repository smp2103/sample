'use client';

import { OrderContainer } from '@smp/features';
import { useOrderController } from './(controller)';

export default () => {
  const { categories, products, coupons, openProductOrderModal, openDiscountModal, openReceipt } =
    useOrderController();

  return (
    <OrderContainer
      openProductOrderModal={openProductOrderModal}
      openDiscountModal={openDiscountModal}
      openReceipt={openReceipt}
      products={products}
      categories={categories}
      coupons={coupons}
    />
  );
};
