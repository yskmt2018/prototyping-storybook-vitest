import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import Button, { type ButtonProps } from './Button.vue'

const vuetify = createVuetify({ components, directives })

describe('Button', () => {
  const mountTarget = (props: ButtonProps) => {
    return mount(Button, {
      props,
      global: { plugins: [vuetify] },
    })
  }

  it('テキストを表示できる', () => {
    const text = 'ボタン'
    const wrapper = mountTarget({ text })
    expect(wrapper.text()).toContain(text)
  })

  it('非活性フラグが有効な場合に非活性化できる', () => {
    const wrapper = mountTarget({ text: '非活性', disabled: true })
    expect(wrapper.get('button').element.disabled).toBe(true)
  })

  it('クリックアクションを通知できる', async () => {
    const wrapper = mountTarget({ text: 'クリック' })
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})
