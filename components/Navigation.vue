<template>
  <div class="header">
    <div class="container">
      <div class="header-item">
        <nuxt-link to="/">Kohei Kawanishi</nuxt-link>
      </div>
      <div class="header-item">
        <nuxt-link to="/" class="mr-4">works</nuxt-link>
        <nuxt-link to="/resume">resume</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  @apply fixed z-10 top-0 w-full;
  .container {
    @apply max-w-full mx-auto flex justify-between px-4 py-4;
    .header-item {
      a {
        @apply text-lg font-semibold text-gray-700;
        transition: color 0.2s;
        &:hover {
          @apply text-gray-800;
        }
      }
    }
  }
}
</style>