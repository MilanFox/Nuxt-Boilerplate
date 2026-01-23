<template>
  <div class="demo-page">
    <nav class="demo-page__navigation">
      <h1 class="demo-page__navigation-title">
        Components
      </h1>

      <StyleguideNavigation :data="demoRoutes" />
    </nav>

    <main class="demo-page__content">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { routes } from '@config/routes';
import type { TreeNode } from '@components/styleguide/StyleguideNavigation/StyleguideNavigation.types';

const demoRoutes = useRouter()
  .getRoutes()
  .sort((a, b) => a.path.localeCompare(b.path))
  .reduce((tree, route) => {
    if (!route.path.startsWith(`${routes.STYLEGUIDE}/`)) return tree;

    const parts = route.path.split('/').slice(2);

    let currentNode: TreeNode = tree;
    parts.forEach((part, i) => {
      if (i === parts.length - 1) {
        currentNode[part] = route.path;
      }
      else {
        currentNode[part] ??= {};
        currentNode = currentNode[part] as TreeNode;
      }
    });

    return tree;
  }, {});
</script>

<style lang="scss">
.demo-page {
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 100dvh;
  font-family: sans-serif;

  &__navigation {
    border-right: 1px solid black;
    overflow-y: auto;

    ul {
      list-style: none;
      padding-bottom: 8px;

      & > li::before {
        content: "└ "
      }
    }

    a {
      text-decoration: underline;

      &:visited {
        color: inherit;
      }
    }
  }

  &__navigation-title {
    text-align: center;
  }

  &__content {
    padding: 0 32px;
    overflow-y: auto;
  }
}
</style>
