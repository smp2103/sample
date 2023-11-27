import { Box, Column, Columns, Row, Rows } from '@mobily/stacks';
import { OrderControlCardComponent, OrderDetailCardComponent } from '@smp/ui';
import { ICoupon, IProduct } from '@smp/web';
import { memo } from 'react';
import { Pressable, ScrollView, Text } from 'react-native';
import { IOrderedProduct, ISelectedProduct } from '../../controller';
import { isNil } from 'lodash';

type IOrderDetailViewProps = {
  orderedProducts: IOrderedProduct[];
  totalPrice: number;
  findProductByName: (name: string) => IProduct;
  selectOrderedProduct: (product: ISelectedProduct) => void;
  addOrderCount: () => void;
  subtractOrderCount: () => void;
  currentSelectedProduct: ISelectedProduct;
  pressDiscount: () => void;
  totalDiscountedPrice: number;
  isCouponApplied: boolean;
  selectedCoupon: ICoupon;
  openReceiptModal: () => void;
  deleteOrderedProduct: (index: number) => void;
};

export const OrderDetailView = memo<IOrderDetailViewProps>(
  ({
    orderedProducts = [],
    totalPrice,
    findProductByName,
    subtractOrderCount,
    selectOrderedProduct,
    addOrderCount,
    currentSelectedProduct,
    pressDiscount,
    totalDiscountedPrice,
    isCouponApplied,
    selectedCoupon,
    openReceiptModal,
    deleteOrderedProduct,
  }) => {
    const disabled = isNil(currentSelectedProduct);
    const handlePressPayment = () => {
      openReceiptModal();
    };

    return (
      <Box flex="fluid" style={{ borderWidth: 1 }}>
        <Rows padding={4}>
          <Row height="content">
            <OrderControlCardComponent
              disabled={disabled}
              onPressPlus={addOrderCount}
              onPressMinus={subtractOrderCount}
              onPressDiscountButton={pressDiscount}
            />
          </Row>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Row paddingTop={2} height="fluid">
              {orderedProducts.map((product, i) => {
                const productInfo = findProductByName(product.name);
                const productPrice = productInfo.price * product.count;
                const optionPrice =
                  product?.options?.reduce((acc, cur) => {
                    if (cur.price) {
                      return acc + cur.price;
                    } else {
                      return acc;
                    }
                  }, 0) || 0;
                const totalPrice = productPrice + optionPrice;
                const handlePressOrderedProduct = () => {
                  selectOrderedProduct({ name: productInfo.name, id: product.id });
                };
                const isPressed = currentSelectedProduct?.id === product.id;
                const handlePressDeleteButton = () => {
                  deleteOrderedProduct(i);
                };
                return (
                  <OrderDetailCardComponent
                    onPressCard={handlePressOrderedProduct}
                    productName={productInfo.name}
                    productOrderCount={product.count}
                    price={productPrice}
                    options={product.options}
                    totalPrice={totalPrice}
                    key={i}
                    isPressed={isPressed}
                    onPressDeleteButton={handlePressDeleteButton}
                  />
                );
              })}
            </Row>
          </ScrollView>
        </Rows>
        {isCouponApplied && (
          <Columns padding={6} style={{ borderTopWidth: 1 }}>
            <Column width="fluid">
              <Text>{'할인'}</Text>
            </Column>
            <Column>
              <Text style={{ color: 'gray' }}>{selectedCoupon.name}</Text>
            </Column>
            <Column width="content">
              <Text>{`-${totalDiscountedPrice.toLocaleString()}원`}</Text>
            </Column>
          </Columns>
        )}
        <Pressable onPress={handlePressPayment} disabled={totalPrice === 0}>
          <Columns
            padding={6}
            style={{ borderTopWidth: 1, backgroundColor: totalPrice ? 'pink' : 'white' }}
          >
            <Column width="fluid">
              <Text>{'결제 금액'}</Text>
            </Column>
            <Column width="content">
              <Text>{`${totalPrice.toLocaleString()}원`}</Text>
            </Column>
          </Columns>
        </Pressable>
      </Box>
    );
  },
);
