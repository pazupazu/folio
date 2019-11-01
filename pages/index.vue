<template>
  <div>
    <navigation></navigation>
    <div class="hero container">
      <h1 class="title">プロダクトをグロースさせる（させたい）デザイナーの河西耕平です</h1>
    </div>
    <div class="cards container mx-auto">
        <card v-for="item in entries"
        :item="item"
        :key="item.id"
        ></card>
    </div>
  </div>
</template>

<script>
import navigation from '@/components/Navigation'
import card from '@/components/Card'
export default {
  components: {
    navigation,
    card
  },
  layout: 'top',
  data() {
    return {
      entries: [
        {
          id: 1,
          url: 'shallwelotte',
          title: 'Shall we Lotte',
          category: 'UIデザイン／ビジュアルデザイン／マークアップ',
          thumb: 'images/swl-main-image@1000w.jpg'
        },
        {
          id: 2,
          url: 'mint',
          title: 'ミントの世界',
          category: 'UIデザイン／ビジュアルデザイン／マークアップ',
          thumb: 'images/mint-main-image@1000w.jpg'
        },
        {
          id: 3,
          url: 'justmysound',
          title: 'わたしのオト',
          category: 'UIデザイン／ビジュアルデザイン／マークアップ',
          thumb: 'images/jms-main-image@1000w.jpg'
        },
        {
          id: 4,
          url: 'queque',
          title: 'QueQue',
          category: 'UI/UXデザイン',
          thumb: 'images/queque-main-image.jpg'
        },
        {
          id: 5,
          url: 'toidasvote',
          title: 'トイダス 投票',
          category: 'UI/UXデザイン／マークアップ',
          thumb: 'images/toidas-vote-main-image@1000w.jpg'
        },
        {
          id: 6,
          url: 'toidasmypage',
          title: 'トイダス マイページ',
          category: 'UI/UXデザイン／マークアップ',
          thumb: 'images/toidas-mypage-main-image@1000w.jpg'
        },
        {
          id: 7,
          url: 'toidas',
          title: 'トイダス',
          category: 'UIデザイン／ビジュアルデザイン／企画／運営',
          thumb: 'images/toidas-main-image@0,25x.jpg'
        },
        {
          id: 8,
          url: 'premium',
          title: 'J-CASTニュース会員化',
          category: 'UI/UXデザイン／マークアップ／ビジュアルデザイン／企画／運営',
          thumb: 'images/premium-main-image@1000w.jpg'
        },
        {
          id: 9,
          url: 'kaizen',
          title: 'UIカイゼン',
          category: 'UI/UXデザイン／マークアップ／企画／進行',
          thumb: 'images/kaizen-main-image@0,25x.jpg'
        },
        {
          id: 10,
          url: 'graphic',
          title: 'ロゴ・グラフィック',
          category: 'グラフィックデザイン',
          thumb: 'images/logo-main-image.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.hero { 
  @apply mx-auto py-40 px-4 flex items-center;
  .title {
    @apply text-xl text-gray-900 font-semibold;
  }
}
.cards {
  @apply mb-24 px-4;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2%;
  grid-row-gap: 100px;
  @screen md {
    grid-template-columns: repeat(2,1fr);
  }
  @screen lg {
    grid-template-columns: repeat(3,1fr);
  }
}
</style>
