import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { Pressable, Text } from 'react-native';

type IProductButtonComponentProps = {
  label: string;
  price: number;
  onPress: () => void;
};

export const ProductButtonComponent = memo<IProductButtonComponentProps>(
  ({ label, price, onPress }) => {
    return (
      <Pressable onPress={onPress}>
        <Box
          padding={6}
          style={{
            aspectRatio: 1,
            borderWidth: 1,
            borderRadius: 8,
          }}
          alignX="center"
          alignY="center"
        >
          <Stack space={2} align="center">
            <Text>{label}</Text>
            <Text>{`${price.toLocaleString()}원`}</Text>
          </Stack>
        </Box>
      </Pressable>
    );
  },
);
