import React from 'react';
import { StoryObj } from '@storybook/react';
import AnimatedLine, { AnimatedLineProps } from './animated-line';

const meta = {
  title: 'Animation/Line/AnimatedLine',
  component: AnimatedLine,
  argTypes: {
    className: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
  },
} 

export default meta;

type Story = StoryObj<typeof meta>;

export const Default:Story = {
  args: {
    className: '',
    width: 300,
    gradient: {
      height: 1,
      color: 'var(--neutral-100)',
      duration: 2,
      delay:0,
    },
    line: {
      height: 1,
      color: 'var(--neutral-200)',
    },
  },
}

export const Primary: Story = (args: AnimatedLineProps) => (
  <div style={{ width: '300px', height: '100px' }}>
    <AnimatedLine {...args} />
  </div>
)

Primary.args = {
  width: 300,
  gradient: {
    height: 1,
    color: 'var(--neutral-100)',
    duration: 2,
    delay:0,
  },
  line: {
    height: 1,
    color: 'var(--neutral-200)',
  },
}