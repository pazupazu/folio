<template>
  <div>
    <nuxt-link :to="item.url" class="card block">
      <div class="image" :style="{backgroundImage: 'url(' + item.thumb + ')'}" lazy="loaded">
      </div>
      <h2 class="text-gray-700 mb-1 font-bold">{{item.title}}</h2>
      <div class="text-xs text-gray-600">{{item.category}}</div>
      <div class="text-xs text-gray-600">{{item.year}}</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  opacity: 1;
  transition: 0.2s;
  &:hover {
    opacity: 0.7;
  }
}
.image {
  display: block;
  width: 100%;
  position: relative;
  height: 0;
  padding-bottom: 66.666%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #d8d8d8;
  -webkit-transition: all .75s ease;
  transition: all .75s;
  margin-bottom: 8px;
}
</style>
