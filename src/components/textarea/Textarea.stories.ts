import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Textarea from './Textarea.vue'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  render: (args: any) => ({
    components: { Textarea },
    setup() {
      return { args }
    },
    template: '<Textarea v-bind="args" />',
  }),
  argTypes: {
    disabled: { control: 'boolean' },
    width: { control: { type: 'range', min: 200, max: 800, step: 100 } },
    color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
  },
  args: {
    title: '',
    inputted: '',
    width: 400,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
  args: {
    title: 'テキストエリア',
    hint: '1 行以上のテキストを入力する場合に使用します。',
    placeholder: 'Hello World',
  },
}

export const Disabled: Story = {
  args: {
    title: '非活性フラグ有効',
    disabled: true,
    inputted: 'Hello',
  },
}

export const Secondary: Story = {
  args: {
    title: 'セカンダリカラー',
    color: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    title: 'ターシャリカラー',
    color: 'tertiary',
  },
}
