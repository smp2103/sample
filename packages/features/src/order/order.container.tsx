import { OrderLayout } from '@smp/ui';
import { memo } from 'react';
import { OrderCategoryView, OrderDetailView, OrderProductsView } from './views';
import { useOrderController } from './controller';
import { ICategory, ICoupon, IOption, IProduct } from '@smp/web';
import { IReceiptModalParams } from '../modal';

type IOrderContainerProps = {
  categories: ICategory[] | undefined;
  products: IProduct[] | undefined;
  coupons: ICoupon[] | undefined;
  openProductOrderModal: (
    product: IProduct,
    orderCallback: (name: string, options?: IOption[]) => void,
  ) => void;
  openDiscountModal: (onPress: (type: string) => void) => void;
  openReceipt: (data: IReceiptModalParams) => void;
};

export const OrderContainer = memo<IOrderContainerProps>(
  ({ categories, products, coupons, openProductOrderModal, openDiscountModal, openReceipt }) => {
    const {
      orderedProducts,
      totalPrice,
      findProductByName,
      selectOrderedProduct,
      addOrderCount,
      subtractOrderCount,
      pressProduct,
      currentSelectedProduct,
      filteredProducts,
      selectedCategory,
      pressCategory,
      pressDiscount,
      totalDiscountedPrice,
      isCouponApplied,
      selectedCoupon,
      openReceiptModal,
      deleteOrderedProduct,
    } = useOrderController(
      categories,
      products,
      openProductOrderModal,
      coupons,
      openDiscountModal,
      openReceipt,
    );

    return (
      <OrderLayout
        header={
          <OrderCategoryView
            selectedCategory={selectedCategory}
            categories={categories}
            pressCategory={pressCategory}
          />
        }
        contentLeft={<OrderProductsView products={filteredProducts} pressProduct={pressProduct} />}
        contentRight={
          <OrderDetailView
            currentSelectedProduct={currentSelectedProduct}
            findProductByName={findProductByName}
            orderedProducts={orderedProducts}
            totalPrice={totalPrice}
            subtractOrderCount={subtractOrderCount}
            selectOrderedProduct={selectOrderedProduct}
            addOrderCount={addOrderCount}
            pressDiscount={pressDiscount}
            totalDiscountedPrice={totalDiscountedPrice}
            isCouponApplied={isCouponApplied}
            selectedCoupon={selectedCoupon}
            openReceiptModal={openReceiptModal}
            deleteOrderedProduct={deleteOrderedProduct}
          />
        }
      />
    );
  },
);
