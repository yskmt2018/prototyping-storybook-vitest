import type { Preview } from '@storybook/vue3-vite'

import { setup } from '@storybook/vue3'
import { withVuetifyTheme } from './withVuetifyTheme.decorator'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

setup((app) => {
  const vuetify = createVuetify({
    components,
    directives,
  })
  app.use(vuetify)
})

export const decorators = [withVuetifyTheme]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
