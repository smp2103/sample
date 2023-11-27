import type { Meta, StoryObj } from '@storybook/react';
import { OrderControlCardComponent } from './order-control-card.component';

const meta = {
  component: OrderControlCardComponent,
  parameters: {
    generate: {
      combineArgs: {
        onPressPlus: [() => {}],
        onPressMinus: [() => {}],
        onPressDiscountButton: [() => {}],
        disabled: [true, false],
      },
    },
  },
} satisfies Meta<typeof OrderControlCardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LiveExample: Story = {
  args: {
    disabled: true,
    onPressPlus: () => {},
    onPressMinus: () => {},
    onPressDiscountButton: () => {},
  },
};

export const Generated = () => {};
