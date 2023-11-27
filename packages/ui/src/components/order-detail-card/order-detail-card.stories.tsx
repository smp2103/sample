import type { Meta, StoryObj } from '@storybook/react';
import { OrderDetailCardComponent } from './order-detail-card.component';

const meta = {
  component: OrderDetailCardComponent,
  parameters: {
    generate: {
      combineArgs: {
        productName: ['아메리카노', '핫도그'],
        productOrderCount: [1, 2],
        price: [1000, 2000],
        options: [
          [
            {
              name: '딸기 2배',
              price: 1000,
            },
          ],
          [
            {
              name: '연하게',
            },
            {
              name: '2샷',
              price: 500,
            },
          ],
        ],
        totalPrice: [5000],
        isPressed: [true, false],
        isReceipt: [true, false],
      },
    },
  },
} satisfies Meta<typeof OrderDetailCardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LiveExample: Story = {
  args: {
    productName: '아메리카노',
    productOrderCount: 1,
    price: 1500,
    options: [
      {
        name: '연하게',
      },
      {
        name: '2샷',
        price: 500,
      },
    ],
    totalPrice: 5000,
    onPressCard: () => {},
    isPressed: false,
    isReceipt: false,
    onPressDeleteButton: () => {},
  },
};

export const Generated = () => {};
