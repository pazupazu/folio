<template>
  <div>
    <navigation></navigation>
    <nuxt />
  </div>
</template>

<script>
import navigation from '@/components/Navigation'
export default {
  components: {
    navigation,
  },
}
</script>

<style lang="scss">

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  @apply bg-gray-200;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.hero-image {
  @apply mb-20;
}
.main-title {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  line-height: 48px;
  @apply text-gray-700;
}
.sub-title {
  text-align: center;
  @apply text-gray-600 text-sm;
}
p {
  @apply max-w-2xl mx-auto px-4 text-gray-900 leading-relaxed mb-10;
  &.small-text {
    @apply text-gray-600 mb-1 text-xs;
  }
}
.heading {
  @apply max-w-2xl mx-auto px-4 text-gray-700 leading-relaxed mb-8 pt-10 text-xl font-extrabold;
}
.image {
  max-width: 1080px;
  @apply mx-auto mb-10;
  img {
    @apply max-w-full mx-auto;
  }
}
</style>
