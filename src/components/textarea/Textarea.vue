<script setup lang="ts">
export type TextareaProps = {
  /** タイトル */
  title: string
  /** ヒント */
  hint?: string
  /** 非活性フラグ */
  disabled?: boolean
  /** 入力欄のプレースホルダ */
  placeholder?: string
  /** コンポーネントの横幅 */
  width?: string | number
  /** 色指定 */
  color?: 'primary' | 'secondary' | 'tertiary'
}

withDefaults(defineProps<TextareaProps>(), { width: 400, color: 'primary' })

/** 入力された文字列 */
const inputted = defineModel<string>('inputted', { required: true })
</script>

<template>
  <div>
    <div class="text-h6">{{ title }}</div>
    <div class="text-caption" v-if="hint">{{ hint }}</div>
    <v-textarea
      v-model:model-value="inputted"
      :disabled
      :placeholder
      :width
      :color
      density="compact"
      counter
      persistent-counter
      base-color="tertiary"
    ></v-textarea>
  </div>
</template>
