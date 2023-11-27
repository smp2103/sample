'use client';

import { Box, Stack, Tiles } from '@mobily/stacks';
import { ButtonComponent, OptionButtonComponent } from '@smp/ui';
import { IOption } from '@smp/web';
import { useState } from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { ModalComponentWithOptions, ModalComponentProp } from 'react-native-modalfy';
import { IModalStackParams } from '../type';

export type IOrderDetailModalProps = ModalComponentProp<
  IModalStackParams,
  void,
  'OrderDetailModal'
>;

export const OrderDetailModal: ModalComponentWithOptions<IOrderDetailModalProps> = ({
  modal: { closeModal, params },
}) => {
  const [selectedOption, setSelectedOption] = useState<IOption[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);

  const { okayButton, product } = params;
  const { name, price } = product;

  const { width } = useWindowDimensions();

  const handlePressOkayButton = async () => {
    const { onPress } = okayButton;
    onPress && (await onPress(name, selectedOption));
    closeModal();
  };

  const handlePressCancelButton = async () => {
    closeModal();
  };

  const pressOption = (pressedOption: IOption) => {
    setSelectedOption((prev) => {
      if (
        prev.find((option, i) => {
          return option.name === pressedOption.name;
        })
      ) {
        return [...prev].filter((option) => {
          return option.name !== pressedOption.name;
        });
      }

      return [...prev, pressedOption];
    });
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
          <Text>{name}</Text>
          <Text>{`${price.toLocaleString()}원`}</Text>
        </Stack>
        <Stack space={2} horizontal>
          <Tiles space={2} columns={2} empty={true}>
            {product?.option?.map((option, i) => {
              const optionName = option.name;
              const optionPrice = option?.price || 0;
              const handlePressOption = () => {
                pressOption(option);
                setSelectedIndex((prev) => {
                  if (prev.includes(i)) {
                    return [...prev.filter((e) => e !== i)];
                  }
                  return [...prev, i];
                });
              };
              const isPressed = selectedIndex.includes(i);

              return (
                <OptionButtonComponent
                  key={i}
                  onPress={handlePressOption}
                  name={optionName}
                  price={optionPrice}
                  isPressed={isPressed}
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

OrderDetailModal.modalOptions = {
  backdropOpacity: 0.6,
};
