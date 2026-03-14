import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Textarea, { type TextareaProps } from './Textarea.vue'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  render: (args: TextareaProps) => ({
    components: { Textarea },
    setup() {
      return { args }
    },
    template: '<Textarea v-bind="args" />',
  }),
  argTypes: {
    title: { control: 'text', description: 'タイトル' },
    hint: { control: 'text', description: 'ヒント' },
    disabled: { control: 'boolean', description: '非活性フラグ' },
    placeholder: { control: 'text', description: '入力欄のプレースホルダ' },
    width: {
      control: { type: 'range', min: 200, max: 800, step: 100 },
      description: 'コンポーネントの横幅',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '色指定',
    },
    inputted: { control: 'text', description: '入力された文字列' },
  },
  args: {
    inputted: '',
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
