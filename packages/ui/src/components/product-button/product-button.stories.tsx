import type { Meta, StoryObj } from '@storybook/react';
import { ProductButtonComponent } from './product-button.component';

const meta = {
  component: ProductButtonComponent,
  parameters: {
    generate: {
      combineArgs: {
        label: ['커피', '스파게티', '빵'],
        price: [1000, 25000, 50000],
      },
    },
  },
} satisfies Meta<typeof ProductButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LiveExample: Story = {
  args: {
    label: 'Text',
    price: 10000,
  },
};

export const Generated = () => {};
