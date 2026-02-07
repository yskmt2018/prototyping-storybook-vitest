<script setup lang="ts">
withDefaults(
  defineProps<{
    /** タイトル */
    title: string
    /** ヒント */
    hint?: string
    /** 非活性フラグ */
    disabled?: boolean
    /** 選択肢のリスト（ラベル、識別子） */
    choices: { label: string; value: string }[]
    /** コンポーネントの横幅 */
    width: string | number
    /** 色指定 */
    color?: 'primary' | 'secondary' | 'tertiary'
  }>(),
  { color: 'primary' },
)

/** 選択された識別子 */
const selected = defineModel<string>('selected', { required: true })
</script>

<template>
  <div>
    <div class="text-h6">{{ title }}</div>
    <div class="text-caption" v-if="hint">{{ hint }}</div>
    <v-select
      v-model:model-value="selected"
      :disabled="disabled"
      :items="choices"
      item-title="label"
      item-value="value"
      :width="width"
      :color="color"
      density="compact"
      hide-details="auto"
      base-color="tertiary"
    ></v-select>
  </div>
</template>
