import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Checkbox from './Checkbox.vue'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  render: (args: any) => ({
    components: { Checkbox },
    setup() {
      return { args }
    },
    template: '<Checkbox v-bind="args" />',
  }),
  argTypes: {
    disabled: { control: 'boolean' },
    width: { control: { type: 'range', min: 200, max: 800, step: 100 } },
    color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
  },
  args: {
    title: '',
    selected: [],
    choices: [
      { label: '選択肢 1', value: 'option1' },
      { label: '選択肢 2', value: 'option2' },
      { label: '選択肢 3', value: 'option3' },
      { label: '選択肢 4', value: 'option4' },
      { label: '選択肢 5', value: 'option5' },
    ],
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
  args: {
    title: 'チェックボックス',
    hint: '選択肢の中から 1 つ以上選択する場合に使用します。',
  },
}

export const Disabled: Story = {
  args: {
    title: '非活性フラグ有効',
    disabled: true,
    selected: ['option1'],
  },
}

export const Secondary: Story = {
  args: {
    title: 'セカンダリカラー',
    color: 'secondary',
    selected: ['option2', 'option4'],
  },
}

export const Tertiary: Story = {
  args: {
    title: 'ターシャリカラー',
    color: 'tertiary',
    selected: ['option3', 'option5'],
  },
}
