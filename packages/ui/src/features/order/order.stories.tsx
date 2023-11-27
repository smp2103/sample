import type { Meta, StoryObj } from '@storybook/react';
import { OrderContainer } from '@smp/features';
import { Categories, Coupons, Products } from './data';

const meta = {
  component: OrderContainer,
  parameters: {
    generate: {
      combineArgs: {
        categories: [Categories],
        products: [Products],
        coupons: [Coupons],
        openProductOrderModal: [() => {}],
        openDiscountModal: [() => {}],
        openReceipt: [() => {}],
      },
    },
  },
} satisfies Meta<typeof OrderContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LiveExample: Story = {
  args: {
    categories: Categories,
    products: Products,
    coupons: Coupons,
    openProductOrderModal: () => {},
    openDiscountModal: () => {},
    openReceipt: () => {},
  },
};
