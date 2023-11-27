'use client';

import { Box, Column, Columns, Row, Rows } from '@mobily/stacks';
import { OrderDetailCardComponent } from '@smp/ui';
import { ScrollView, Text, useWindowDimensions } from 'react-native';
import { ModalComponentWithOptions, ModalComponentProp } from 'react-native-modalfy';
import { IModalStackParams } from '../type';

export type IReceiptModalProps = ModalComponentProp<IModalStackParams, void, 'ReceiptModal'>;

export const ReceiptModal: ModalComponentWithOptions<IReceiptModalProps> = ({
  modal: { params },
}) => {
  const {
    orderedProducts,
    findProductByName,
    isCouponApplied,
    selectedCoupon,
    totalDiscountedPrice,
    totalPrice,
  } = params;

  const { width } = useWindowDimensions();

  return (
    <Box
      padding={6}
      style={{
        backgroundColor: 'white',
        width: width - 2 * 8,
        aspectRatio: 1 / 1.5,
        borderRadius: 2,
        maxWidth: 432,
      }}
      alignX="center"
      alignY="center"
      alignSelf="center"
    >
      <Box flex="fluid" style={{ borderWidth: 1 }}>
        <Rows padding={4}>
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

                return (
                  <OrderDetailCardComponent
                    onPressCard={() => {}}
                    productName={productInfo.name}
                    productOrderCount={product.count}
                    price={productPrice}
                    options={product.options}
                    totalPrice={totalPrice}
                    key={i}
                    isPressed={false}
                    isReceipt={true}
                    onPressDeleteButton={() => {}}
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
        <Columns padding={6} style={{ borderTopWidth: 1 }}>
          <Column width="fluid">
            <Text>{'결제 금액'}</Text>
          </Column>
          <Column width="content">
            <Text>{`${totalPrice.toLocaleString()}원`}</Text>
          </Column>
        </Columns>
      </Box>
    </Box>
  );
};

ReceiptModal.modalOptions = {
  backdropOpacity: 0.6,
};
