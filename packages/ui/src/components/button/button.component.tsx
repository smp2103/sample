import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';

export type IButtonSize = 'small' | 'large' | 'fluid';

type IButtonComponentProps = {
  size?: IButtonSize;
  onPress: () => void;
  label: string;
  disabled?: boolean;
};

export const ButtonComponent = memo<IButtonComponentProps>(
  ({ size = 'small', onPress, label, disabled = false }) => {
    const getButtonStyles: () => StyleProp<ViewStyle> = () => {
      const common = {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: disabled ? 'gray' : 'black',
      };
      if (size === 'fluid') {
        return {
          width: '100%',
          ...common,
        };
      } else {
        if (size === 'small') {
          return {
            width: 100,
            ...common,
          };
        } else {
          return { width: 160, ...common };
        }
      }
    };

    return (
      <Pressable disabled={disabled} onPress={onPress}>
        <Box alignX="center" alignY="center" padding={2} style={getButtonStyles()}>
          <Text style={{ color: disabled ? 'gray' : 'black' }}>{label}</Text>
        </Box>
      </Pressable>
    );
  },
);
