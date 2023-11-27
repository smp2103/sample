import { Column, Columns, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { ButtonComponent } from '../button';

type IOrderControlCardComponentProps = {
  onPressPlus: () => void;
  onPressMinus: () => void;
  disabled: boolean;
  onPressDiscountButton: () => void;
};

export const OrderControlCardComponent = memo<IOrderControlCardComponentProps>(
  ({ onPressMinus, onPressPlus, disabled, onPressDiscountButton }) => {
    const handlePressPlusButton = () => {
      onPressPlus();
    };

    const handlePressMinusButton = () => {
      onPressMinus();
    };

    const handlePressDiscountButton = () => {
      onPressDiscountButton();
    };
    return (
      <Stack space={2} align="right">
        <ButtonComponent label="할인" onPress={handlePressDiscountButton} />
        <Columns space={2}>
          <Column width="fluid">
            <ButtonComponent
              disabled={disabled}
              size="fluid"
              label="-"
              onPress={handlePressMinusButton}
            />
          </Column>
          <Column width="fluid">
            <ButtonComponent
              disabled={disabled}
              size="fluid"
              label="+"
              onPress={handlePressPlusButton}
            />
          </Column>
        </Columns>
      </Stack>
    );
  },
);
