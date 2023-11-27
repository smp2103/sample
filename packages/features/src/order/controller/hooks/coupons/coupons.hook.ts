import { ICoupon } from '@smp/web';
import isNil from 'lodash/isNil';
import { useState } from 'react';

export const useCoupons = (coupons: ICoupon[]) => {
  const [selectedCoupon, setSelectedCoupon] = useState<ICoupon>();

  const selectCoupon = (type: ICoupon['type']) => {
    setSelectedCoupon(
      coupons.find((coupon) => {
        return coupon.type === type;
      }),
    );
  };

  const isCouponApplied = !isNil(selectedCoupon);

  return { selectedCoupon, selectCoupon, isCouponApplied };
};
