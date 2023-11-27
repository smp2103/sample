import { IProduct, IOption, ICoupon } from '@smp/web';
import { IOrderedProduct } from '../order';

export type IReceiptModalParams = {
  okayButton: {
    onPress: () => void;
  };
  orderedProducts: IOrderedProduct[];
  totalPrice: number;
  findProductByName: (name: string) => IProduct;
  totalDiscountedPrice: number;
  isCouponApplied: boolean;
  selectedCoupon: ICoupon;
};

export type IModalStackParams = {
  OrderDetailModal: {
    product: IProduct;
    okayButton?: {
      onPress: (name: string, options?: IOption[]) => void;
    };
  };
  DiscountModal: {
    okayButton: {
      onPress: (type: ICoupon['type']) => void;
    };
    coupons: ICoupon[];
  };
  ReceiptModal: IReceiptModalParams;
};
