import { Box } from '@mobily/stacks';
import { memo } from 'react';
import { Pressable, Text } from 'react-native';

type ITabButtonComponentProps = {
  label: string;
  focused?: boolean;
  onPress: () => void;
};

export const TabButtonComponent = memo<ITabButtonComponentProps>(
  ({ label, focused = false, onPress }) => {
    const handlePressButton = () => {
      onPress();
    };
    return (
      <Pressable onPress={handlePressButton}>
        <Box
          padding={4}
          style={{
            borderWidth: 1,
            borderRadius: 8,
            backgroundColor: focused ? 'gray' : 'white',
          }}
          alignX="center"
          alignY="center"
        >
          <Text
            style={{
              color: focused ? 'white' : 'black',
            }}
          >
            {label}
          </Text>
        </Box>
      </Pressable>
    );
  },
);
