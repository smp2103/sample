import { Box, Column, Columns, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { Pressable, Text } from 'react-native';
import { IOption } from '@smp/web';

type IOrderDetailCardComponentProps = {
  productName: string;
  productOrderCount: number;
  price: number;
  options: IOption[];
  totalPrice: number;
  onPressCard: () => void;
  isPressed: boolean;
  isReceipt?: boolean;
  onPressDeleteButton: () => void;
};

export const OrderDetailCardComponent = memo<IOrderDetailCardComponentProps>(
  ({
    productName,
    productOrderCount,
    price,
    options = [],
    totalPrice,
    onPressCard,
    isPressed,
    isReceipt = false,
    onPressDeleteButton,
  }) => {
    const handlePressCard = () => {
      onPressCard();
    };
    const handlePressX = () => {
      onPressDeleteButton();
    };
    return (
      <Stack padding={2} style={{ borderBottomWidth: 1 }}>
        {!isReceipt && (
          <Pressable onPress={handlePressX}>
            <Box paddingBottom={1} alignSelf="right">
              <Text>{'X'}</Text>
            </Box>
          </Pressable>
        )}
        <Pressable onPress={handlePressCard}>
          <Stack space={4} paddingY={2} style={{ backgroundColor: isPressed ? 'pink' : 'white' }}>
            <Columns space={4} alignX="between">
              <Column width="fluid">
                <Text>{productName}</Text>
              </Column>
              <Column width="content">
                <Text>{`x${productOrderCount}`}</Text>
              </Column>
              <Column width="content">
                <Text>{`${price.toLocaleString()}원`}</Text>
              </Column>
            </Columns>
            {options.map((option, i) => {
              return (
                <Columns key={i} alignX="between">
                  <Column>
                    <Text style={{ color: 'gray' }}>{option.name}</Text>
                  </Column>
                  {option?.price && (
                    <Column width="content">
                      <Text
                        style={{ color: 'gray' }}
                      >{`${option?.price?.toLocaleString()}원`}</Text>
                    </Column>
                  )}
                </Columns>
              );
            })}
            <Box alignSelf="right" paddingTop={2}>
              <Text>{`${totalPrice.toLocaleString()}원`}</Text>
            </Box>
          </Stack>
        </Pressable>
      </Stack>
    );
  },
);
