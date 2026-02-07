<script setup lang="ts">
withDefaults(
  defineProps<{
    /** タイトル */
    title: string
    /** ヒント */
    hint?: string
    /** 非活性フラグ */
    disabled?: boolean
    /** 入力欄のプレースホルダ */
    placeholder?: string
    /** コンポーネントの横幅 */
    width: string | number
    /** 色指定 */
    color?: 'primary' | 'secondary' | 'tertiary'
  }>(),
  { color: 'primary' },
)

/** 入力された文字列 */
const inputted = defineModel<string>('inputted', { required: true })
</script>

<template>
  <div>
    <div class="text-h6">{{ title }}</div>
    <div class="text-caption" v-if="hint">{{ hint }}</div>
    <v-textarea
      v-model:model-value="inputted"
      :disabled="disabled"
      :placeholder="placeholder"
      :width="width"
      :color="color"
      density="compact"
      counter
      persistent-counter
      base-color="tertiary"
    ></v-textarea>
  </div>
</template>
