<script setup lang="ts">
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
}>()

/** 入力された文字列 */
const inputted = defineModel<string>('inputted', { required: true })
</script>

<template>
  <div>
    <div class="text-h6">{{ title }}</div>
    <div class="text-caption" v-if="hint">{{ hint }}</div>
    <v-text-field
      v-model:model-value="inputted"
      :disabled="disabled"
      :placeholder="placeholder"
      :width="width"
      density="compact"
      hide-details="auto"
      color="primary"
      base-color="tertiary"
    ></v-text-field>
  </div>
</template>
