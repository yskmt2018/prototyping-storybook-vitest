import type { Meta, StoryObj } from '@storybook/vue3-vite'

import RadioButton, { type RadioButtonProps } from './RadioButton.vue'

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  render: (args: RadioButtonProps) => ({
    components: { RadioButton },
    setup() {
      return { args }
    },
    template: '<RadioButton v-bind="args" />',
  }),
  argTypes: {
    title: { control: 'text', description: 'タイトル' },
    hint: { control: 'text', description: 'ヒント' },
    disabled: { control: 'boolean', description: '非活性フラグ' },
    width: {
      control: { type: 'range', min: 200, max: 800, step: 100 },
      description: 'コンポーネントの横幅',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '色指定',
    },
  },
  args: {
    // 選択肢のリスト（ラベル、識別子）
    choices: [
      { label: '選択肢 1', value: 'option1' },
      { label: '選択肢 2', value: 'option2' },
      { label: '選択肢 3', value: 'option3' },
    ],
    // 選択された識別子
    selected: '',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
  args: {
    title: 'ラジオボタン',
    hint: '選択肢の中から 1 つだけを選択する場合に使用します。',
  },
}

export const Disabled: Story = {
  args: {
    title: '非活性フラグ有効',
    disabled: true,
    selected: 'option1',
  },
}

export const Secondary: Story = {
  args: {
    title: 'セカンダリカラー',
    color: 'secondary',
    selected: 'option2',
  },
}

export const Tertiary: Story = {
  args: {
    title: 'ターシャリカラー',
    color: 'tertiary',
    selected: 'option3',
  },
}
