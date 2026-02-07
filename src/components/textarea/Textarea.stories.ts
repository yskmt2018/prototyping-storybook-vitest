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
  args: {
    inputted: '',
    width: 400,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'デフォルト',
  },
}

export const Disabled: Story = {
  args: {
    title: '非活性フラグ有効',
    disabled: true,
  },
}

export const WithHintAndPlaceholder: Story = {
  args: {
    title: 'ヒントと入力欄のプレースホルダあり',
    hint: '1 行以上のテキストを入力する場合に使用します。',
    placeholder: 'Hello World',
  },
}
