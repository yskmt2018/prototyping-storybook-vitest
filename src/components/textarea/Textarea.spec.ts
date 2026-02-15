import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import Textarea, { type TextareaProps } from './Textarea.vue'

const vuetify = createVuetify({ components, directives })

describe('Textarea', () => {
  const mountTarget = (props: TextareaProps) => {
    return mount(Textarea, {
      props: { ...props, inputted: '' },
      global: { plugins: [vuetify] },
    })
  }

  it('タイトル、ヒント、入力欄のプレースホルダを表示できる', () => {
    const title = 'テキストエリア'
    const hint = '1 行以上のテキストを入力する場合に使用します。'
    const placeholder = 'Hello World'
    const wrapper = mountTarget({ title, hint, placeholder })
    expect(wrapper.text()).toContain(title)
    expect(wrapper.text()).toContain(hint)
    expect(wrapper.get('textarea').attributes('placeholder')).toBe(placeholder)
  })

  it('非活性フラグが有効な場合に非活性化できる', () => {
    const wrapper = mountTarget({ title: '非活性フラグ有効', disabled: true })
    expect(wrapper.get('textarea').element.disabled).toBe(true)
  })

  it('入力された文字列を通知できる', async () => {
    const value = 'Hello World'
    const wrapper = mountTarget({ title: '入力文字列通知' })
    await wrapper.get('textarea').setValue(value)
    expect(wrapper.emitted('update:inputted')).toEqual([[value]])
  })
})
