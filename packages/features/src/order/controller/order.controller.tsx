import { ICategory, ICoupon, IOption, IProduct } from '@smp/web';
import { useCategories, useCoupons, useOrderProduct, useSelectedProduct } from './hooks';
import { IReceiptModalParams } from '../../modal';

export const useOrderController = (
  categories: ICategory[],
  products: IProduct[],
  openProductOrderModal: (
    product: IProduct,
    orderCallback: (name: string, options?: IOption[]) => void,
  ) => void,
  coupons: ICoupon[],
  openDiscountModal: (onPress: (type: string) => void) => void,
  openReceipt: (data: IReceiptModalParams) => void,
) => {
  const { currentSelectedProduct, selectOrderedProduct } = useSelectedProduct();
  const { selectCategory, selectedCategory } = useCategories(categories);
  const { selectedCoupon, selectCoupon, isCouponApplied } = useCoupons(coupons);

  const {
    orderProduct,
    orderedProducts,
    totalPrice,
    findProductByName,
    addOrderCount,
    subtractOrderCount,
    deleteProduct,
  } = useOrderProduct(products, currentSelectedProduct);

  const pressProduct = (product: IProduct) => {
    openProductOrderModal(product, orderProduct);
  };

  const filteredProducts = products.filter((product) => {
    return product.categoryId === selectedCategory?.id;
  });

  const pressCategory = (index: number) => {
    selectCategory(index);
  };

  const pressDiscount = () => {
    openDiscountModal(selectCoupon);
  };

  const totalDiscountedPrice =
    selectedCoupon?.type === 'amount'
      ? selectedCoupon?.price
      : Math.ceil((totalPrice * selectedCoupon?.price) / 100);
  const totalPriceDiscountApplied = selectedCoupon ? totalPrice - totalDiscountedPrice : totalPrice;
  const openReceiptModal = () => {
    openReceipt({
      okayButton: {
        onPress: () => {},
      },
      orderedProducts,
      totalPrice,
      findProductByName,
      totalDiscountedPrice,
      isCouponApplied,
      selectedCoupon,
    });
  };

  const deleteOrderedProduct = (index: number) => {
    deleteProduct(index);
  };
  return {
    orderedProducts,
    totalPrice: totalPriceDiscountApplied < 0 ? 0 : totalPriceDiscountApplied,
    findProductByName,
    selectOrderedProduct,
    addOrderCount,
    subtractOrderCount,
    pressProduct,
    currentSelectedProduct,
    filteredProducts,
    pressCategory,
    selectedCategory,
    selectedCoupon,
    pressDiscount,
    totalDiscountedPrice,
    isCouponApplied,
    openReceiptModal,
    deleteOrderedProduct,
  };
};
