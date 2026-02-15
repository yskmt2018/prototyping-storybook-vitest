import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from '../App.vue'

const vuetify = createVuetify({ components, directives })
global.ResizeObserver = require('resize-observer-polyfill')

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(
      {
        template: '<v-layout><App /></v-layout>',
      },
      {
        props: {},
        global: {
          components: { App },
          plugins: [vuetify],
        },
      },
    )
    expect(wrapper.text()).toContain('VueとStorybook、Vitestによるフロントエンド・プロトタイピング')
  })
})
