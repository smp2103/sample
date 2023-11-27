import type { Meta, StoryObj } from '@storybook/react';
import { TabButtonComponent } from './tab-button.component';

const meta = {
  component: TabButtonComponent,
  parameters: {
    generate: {
      combineArgs: {
        label: ['hi', 'hello'],
      },
    },
  },
} satisfies Meta<typeof TabButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LiveExample: Story = {
  args: {
    label: 'Text',
  },
};

export const Generated = () => {};
