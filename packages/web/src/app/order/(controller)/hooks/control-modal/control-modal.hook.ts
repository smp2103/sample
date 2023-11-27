import { useModal } from 'react-native-modalfy';
import { ICoupon, IOption, IProduct } from '../../../../../mock';
import { IModalStackParams, IReceiptModalParams } from '@smp/features';

export const useControlModal = (coupons: ICoupon[]) => {
  const { openModal } = useModal<IModalStackParams>();

  const openProductOrderModal = (
    product: IProduct,
    orderCallback: (name: string, options?: IOption[]) => void,
  ) => {
    openModal('OrderDetailModal', {
      product,
      okayButton: {
        onPress: orderCallback,
      },
    });
  };

  const openDiscountModal = (onPress: (type: ICoupon['type']) => void) => {
    openModal('DiscountModal', {
      coupons: coupons,
      okayButton: {
        onPress,
      },
    });
  };

  const openReceipt = (data: IReceiptModalParams) => {
    const {
      okayButton,
      orderedProducts,
      totalPrice,
      findProductByName,
      totalDiscountedPrice,
      isCouponApplied,
      selectedCoupon,
    } = data;
    openModal('ReceiptModal', {
      okayButton,
      orderedProducts,
      totalPrice,
      findProductByName,
      totalDiscountedPrice,
      isCouponApplied,
      selectedCoupon,
    });
  };

  return { openProductOrderModal, openDiscountModal, openReceipt };
};
