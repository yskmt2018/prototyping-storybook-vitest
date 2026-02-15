<script setup lang="ts">
export type TextFieldProps = {
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

withDefaults(defineProps<TextFieldProps>(), { width: 400, color: 'primary' })

/** 入力された文字列 */
const inputted = defineModel<string>('inputted', { required: true })
</script>

<template>
  <div>
    <div class="text-h6">{{ title }}</div>
    <div class="text-caption" v-if="hint">{{ hint }}</div>
    <v-text-field
      v-model:model-value="inputted"
      :disabled
      :placeholder
      :width
      :color
      density="compact"
      hide-details="auto"
      base-color="tertiary"
    ></v-text-field>
  </div>
</template>
