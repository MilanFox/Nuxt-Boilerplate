<template>
  <div class="playground">
    <h2 class="playground__title">
      {{ title }}
    </h2>

    <div class="playground__content">
      <div class="playground__controls">
        <PlaygroundField
          v-for="(field, label) in fields"
          :key="label"
          v-model="state[label]"
          :label="label"
          :field="field"
        />
      </div>

      <div class="playground__preview">
        <component
          :is="component"
          v-bind="state"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
import type { PlaygroundFieldType } from '../PlaygroundField/PlaygroundField.types';

import { reactive } from 'vue';

const props = defineProps<{
  title: string
  component: Component
  fields: Record<string, PlaygroundFieldType>
  defaults: Record<string, unknown>
}>();

const state = reactive({ ...(props.defaults || {}) });
</script>

<style scoped lang="scss">
.playground {
  &__content {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 32px;
  }

  &__controls {
    border-right: 1px solid black;
    padding-right: 16px;
  }

  &__preview {
    padding: 16px;
    background: #f7f7f7;
    border: 1px solid black;
  }
}
</style>
