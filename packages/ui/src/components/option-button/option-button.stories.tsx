import type { Meta, StoryObj } from '@storybook/react';
import { OptionButtonComponent } from './option-button.component';

const meta = {
  component: OptionButtonComponent,
  parameters: {
    generate: {
      combineArgs: {
        name: ['스파게티'],
        price: [1000],
        isPressed: [true, false],
        type: ['rate', 'amount'],
      },
    },
  },
} satisfies Meta<typeof OptionButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LiveExample: Story = {
  args: {
    name: 'Text',
    price: 1000,
    onPress: () => {},
    isPressed: false,
  },
};

export const Generated = () => {};
