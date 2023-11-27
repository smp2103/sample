'use client';

import { Box, Stack, Tiles } from '@mobily/stacks';
import { ButtonComponent, OptionButtonComponent } from '@smp/ui';
import { ICoupon } from '@smp/web';
import { useState } from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { ModalComponentWithOptions, ModalComponentProp } from 'react-native-modalfy';
import { IModalStackParams } from '../type';

export type IDiscountModalProps = ModalComponentProp<IModalStackParams, void, 'DiscountModal'>;

export const DiscountModal: ModalComponentWithOptions<IDiscountModalProps> = ({
  modal: { closeModal, params },
}) => {
  const [selectedCouponType, setSelectedCouponType] = useState<ICoupon['type']>();
  const [selectedIndex, setSelectedIndex] = useState<number>();

  const { okayButton, coupons } = params;

  const { width } = useWindowDimensions();

  const handlePressOkayButton = async () => {
    const { onPress } = okayButton;
    onPress && (await onPress(selectedCouponType));
    closeModal();
  };

  const handlePressCancelButton = async () => {
    closeModal();
  };

  const pressCoupon = (pressedCouponType: ICoupon['type']) => {
    setSelectedCouponType(pressedCouponType);
  };

  return (
    <Box
      padding={6}
      style={{
        backgroundColor: 'white',
        width: width - 2 * 8,
        aspectRatio: 1,
        borderRadius: 2,
        maxWidth: 432,
      }}
      alignX="center"
      alignY="center"
      alignSelf="center"
    >
      <Stack align="center" space={12}>
        <Stack space={2} align="center">
          <Text>{'사용할 쿠폰을 선택해주세요.'}</Text>
        </Stack>
        <Stack space={2} horizontal>
          <Tiles space={2} columns={2} empty={true}>
            {coupons?.map((coupon, i) => {
              const couponName = coupon.name;
              const couponType = coupon.type;
              const couponPrice = coupon.price;

              const handlePressOption = () => {
                pressCoupon(couponType);
                setSelectedIndex(i);
              };
              const isPressed = selectedIndex === i;

              return (
                <OptionButtonComponent
                  key={i}
                  onPress={handlePressOption}
                  name={couponName}
                  price={couponPrice}
                  isPressed={isPressed}
                  type={couponType}
                />
              );
            })}
          </Tiles>
        </Stack>
        <Stack horizontal space={2}>
          {<ButtonComponent label="이전" onPress={handlePressCancelButton} size="large" />}
          {<ButtonComponent label="담기" onPress={handlePressOkayButton} size="large" />}
        </Stack>
      </Stack>
    </Box>
  );
};

DiscountModal.modalOptions = {
  backdropOpacity: 0.6,
};
