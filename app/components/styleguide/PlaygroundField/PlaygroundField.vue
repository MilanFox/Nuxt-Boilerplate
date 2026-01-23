<template>
  <label class="playground-field">
    {{ label }}

    <input v-if="field.type === 'text'" v-model="state" type="text" />

    <input v-if="field.type === 'number'" v-model.number="state" type="number" />

    <input v-if="field.type === 'boolean'" v-model="state" type="checkbox" />

    <select v-if="field.type === 'select'" v-model="state">
      <option v-for="opt in field.options" :key="opt" :value="opt">{{ opt }}</option>
    </select>

  </label>
</template>

<script setup lang="ts">
import type { PlaygroundFieldType } from './PlaygroundField.types';

defineProps<{ label: string, field: PlaygroundFieldType }>();

const state = defineModel<unknown>();
</script>

<style lang="scss">
.playground-field {
  display: block;
}
</style>
