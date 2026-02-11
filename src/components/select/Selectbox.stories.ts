import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Selectbox from './Selectbox.vue'

const meta = {
  title: 'Components/Selectbox',
  component: Selectbox,
  render: (args: any) => ({
    components: { Selectbox },
    setup() {
      return { args }
    },
    template: '<Selectbox v-bind="args" />',
  }),
  argTypes: {
    disabled: { control: 'boolean' },
    width: { control: { type: 'range', min: 200, max: 800, step: 100 } },
    color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
  },
  args: {
    selected: '',
    width: 400,
    choices: [
      { label: '選択肢 1', value: 'option1' },
      { label: '選択肢 2', value: 'option2' },
      { label: '選択肢 3', value: 'option3' },
      { label: '選択肢 4', value: 'option4' },
      { label: '選択肢 5', value: 'option5' },
      { label: '選択肢 6', value: 'option6' },
      { label: '選択肢 7', value: 'option7' },
    ],
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Selectbox>

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
  args: {
    title: 'セレクトボックス',
    hint: '多くの選択肢の中から 1 つだけを選択する場合に使用します。',
  },
}

export const Disabled: Story = {
  args: {
    title: '非活性フラグ有効',
    disabled: true,
    selected: 'option3',
  },
}

export const Secondary: Story = {
  args: {
    title: 'セカンダリカラー',
    color: 'secondary',
    selected: 'option5',
  },
}

export const Tertiary: Story = {
  args: {
    title: 'ターシャリカラー',
    color: 'tertiary',
    selected: 'option7',
  },
}
