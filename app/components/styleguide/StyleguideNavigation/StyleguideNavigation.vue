<template>
  <ul>
    <li
      v-for="(value, key) in data"
      :key="key"
    >
      <template v-if="typeof value === 'string'">
        <a :href="value">{{ key }}</a>
      </template>

      <template v-else>
        <span>{{ key }}</span>

        <StyleguideNavigation :data="value" />
      </template>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { TreeNode } from './StyleguideNavigation.types';

defineProps<{ data: TreeNode }>();
</script>
