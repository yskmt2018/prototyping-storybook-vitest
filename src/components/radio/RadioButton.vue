<script setup lang="ts">
export type RadioButtonProps = {
  /** タイトル */
  title: string
  /** ヒント */
  hint?: string
  /** 選択肢のリスト（ラベル、識別子） */
  choices: { label: string; value: string }[]
  /** 非活性フラグ */
  disabled?: boolean
  /** コンポーネントの横幅 */
  width?: string | number
  /** 色指定 */
  color?: 'primary' | 'secondary' | 'tertiary'
}

withDefaults(defineProps<RadioButtonProps>(), { width: 400, color: 'primary' })

/** 選択された識別子 */
const selected = defineModel<string>('selected', { required: true })
</script>

<template>
  <div>
    <div class="text-h6">{{ title }}</div>
    <div class="text-caption" v-if="hint">{{ hint }}</div>
    <v-radio-group v-model:model-value="selected" :disabled :width hide-details="auto">
      <v-radio
        v-for="choice in choices"
        :key="choice.value"
        :label="choice.label"
        :value="choice.value"
        :color
        base-color="tertiary"
      ></v-radio>
    </v-radio-group>
  </div>
</template>
