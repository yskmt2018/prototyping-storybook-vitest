import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { fn } from 'storybook/test'

import Button, { type ButtonProps } from './Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  render: (args: ButtonProps) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args" />',
  }),
  argTypes: {
    text: { control: 'text', description: 'テキスト' },
    disabled: { control: 'boolean', description: '非活性フラグ' },
    importance: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'ボタンの重要度',
    },
  },
  args: {
    // クリックアクションを通知
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
