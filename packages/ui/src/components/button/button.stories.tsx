import type { Meta, StoryObj } from '@storybook/react';
import { ButtonComponent } from './button.component';

const meta = {
  component: ButtonComponent,
  parameters: {
    generate: {
      combineArgs: {
        label: ['스파게티', '빵'],
        size: ['small', 'large', 'fluid'],
        disabled: [true, false],
      },
    },
  },
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LiveExample: Story = {
  args: {
    label: 'Text',
  },
};

export const Generated = () => {};
