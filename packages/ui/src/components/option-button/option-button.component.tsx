import { Box, Stack } from '@mobily/stacks';
import { ICoupon } from '@smp/web';
import { memo } from 'react';
import { Pressable, Text } from 'react-native';

type IOptionButtonComponentProps = {
  name: string;
  price: number;
  onPress: () => void;
  isPressed: boolean;
  type?: ICoupon['type'];
};

export const OptionButtonComponent = memo<IOptionButtonComponentProps>(
  ({ name, price, onPress, isPressed, type = 'amount' }) => {
    const handlePressButton = () => {
      onPress();
    };
    return (
      <Pressable onPress={handlePressButton}>
        <Box
          alignY="center"
          style={{
            width: 100,
            aspectRatio: 1,
            borderWidth: isPressed ? 2 : 1,
            borderRadius: 8,
            borderColor: isPressed ? 'blue' : 'black',
          }}
        >
          <Stack space={2} align="center">
            <Text style={{ color: isPressed ? 'blue' : 'black' }}>{name}</Text>
            <Text style={{ color: isPressed ? 'blue' : 'black' }}>
              {type === 'amount' ? `${price.toLocaleString()}원` : `${price.toLocaleString()}%`}
            </Text>
          </Stack>
        </Box>
      </Pressable>
    );
  },
);
