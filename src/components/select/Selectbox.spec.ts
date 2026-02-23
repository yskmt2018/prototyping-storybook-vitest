import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import Selectbox, { type SelectboxProps } from './Selectbox.vue'

const vuetify = createVuetify({ components, directives })

describe('Selectbox', () => {
  const mountTarget = (props: SelectboxProps) => {
    return mount(Selectbox, {
      props: { ...props, selected: '' },
      global: { plugins: [vuetify] },
    })
  }

  // 各テストで使用する選択肢のリスト
  const choices = [
    { label: '選択肢 1', value: 'option1' },
    { label: '選択肢 2', value: 'option2' },
    { label: '選択肢 3', value: 'option3' },
    { label: '選択肢 4', value: 'option4' },
    { label: '選択肢 5', value: 'option5' },
    { label: '選択肢 6', value: 'option6' },
    { label: '選択肢 7', value: 'option7' },
  ]

  it('タイトル、ヒントを表示できる', () => {
    const title = 'セレクトボックス'
    const hint = '多くの選択肢の中から 1 つだけを選択する場合に使用します。'
    const wrapper = mountTarget({ title, hint, choices })
    expect(wrapper.text()).toContain(title)
    expect(wrapper.text()).toContain(hint)
  })

  it('非活性フラグが有効な場合に非活性化できる', () => {
    const wrapper = mountTarget({ title: '非活性フラグ有効', disabled: true, choices })
    expect(wrapper.findAll('input').every((ipt) => ipt.element.disabled)).toBe(true)
  })
})
