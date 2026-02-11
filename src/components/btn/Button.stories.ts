import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { fn } from 'storybook/test'

import Button from './Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  render: (args: any) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args" />',
  }),
  argTypes: {
    disabled: { control: 'boolean' },
    importance: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
  },
  args: {
    text: '',
    onClick: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'プライマリ',
    importance: 'primary',
  },
}

export const Disabled: Story = {
  args: {
    text: '非活性',
    disabled: true,
  },
}

export const Secondary: Story = {
  args: {
    text: 'セカンダリ',
    importance: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    text: 'ターシャリ',
    importance: 'tertiary',
  },
}
