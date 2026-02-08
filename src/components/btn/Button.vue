<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /** テキスト */
    text: string
    /** 非活性フラグ */
    disabled?: boolean
    /** ボタンの重要度 */
    importance?: 'primary' | 'secondary' | 'tertiary'
  }>(),
  { importance: 'primary' },
)

// クリックアクションを通知
defineEmits(['click'])

// ボタンの重要度によりスタイルを変更
const variant = computed(() => {
  return props.importance === 'primary'
    ? 'elevated'
    : props.importance === 'secondary'
      ? 'outlined'
      : 'tonal'
})
</script>

<template>
  <div>
    <v-btn
      @click="$emit('click')"
      :text
      :disabled
      :variant
      :color="importance"
      :base-color="importance"
      min-height="48"
      min-width="96"
    ></v-btn>
  </div>
</template>
