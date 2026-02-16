import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import RadioButton, { type RadioButtonProps } from './RadioButton.vue'

const vuetify = createVuetify({ components, directives })

describe('RadioButton', () => {
  const mountTarget = (props: RadioButtonProps) => {
    return mount(RadioButton, {
      props: { ...props, selected: '' },
      global: { plugins: [vuetify] },
    })
  }

  // 各テストで使用する選択肢のリスト
  const choices = [
    { label: '選択肢 1', value: 'option1' },
    { label: '選択肢 2', value: 'option2' },
    { label: '選択肢 3', value: 'option3' },
  ]

  it('タイトル、ヒント、選択肢のリストを表示できる', () => {
    const title = 'ラジオボタン'
    const hint = '選択肢の中から 1 つだけを選択する場合に使用します。'
    const wrapper = mountTarget({ title, hint, choices })
    expect(wrapper.text()).toContain(title)
    expect(wrapper.text()).toContain(hint)
    choices.forEach((choice) => expect(wrapper.text()).toContain(choice.label))
  })

  it('非活性フラグが有効な場合に非活性化できる', () => {
    const wrapper = mountTarget({ title: '非活性フラグ有効', disabled: true, choices })
    expect(wrapper.findAll('input').every((ipt) => ipt.element.disabled)).toBe(true)
  })

  it('選択された識別子を通知できる', () => {
    const wrapper = mountTarget({ title: '選択識別子通知', choices })
    choices.forEach(async (choice, idx) => {
      await wrapper.get(`input[aria-label="${choice.label}"]`).setValue()
      expect(wrapper.emitted('update:selected')?.[idx]).toEqual([choice.value])
    })
  })
})
