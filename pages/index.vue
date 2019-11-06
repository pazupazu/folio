<template>
  <div>
    <navigation></navigation>
    <div class="hero container">
      <h1 class="title">プロダクトをグロースさせる（させたい）デザイナーの河西耕平です</h1>
    </div>
    <p class="subinfo container text-sm"><span class="new"><i class="material-icons">arrow_back</i></span>NEW OLD<span class="old"><i class="material-icons">arrow_forward</i></span></p>
    <div class="cards container mx-auto">
        <card v-for="item in entries"
        :item="item"
        :key="item.id"
        ></card>
    </div>
    <div class="container mx-auto mb-24 px-4">
      <a href="https://drive.google.com/file/d/1D_ADMIXOd3nTyjh1ATMbDUppkhGNDdRq/view?usp=sharing" target="_blank" class="button mr-4">
        PDFで見る
      </a>
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
  head () {
    return {
      title: '河西耕平のポートフォリオ'
    }
  },
  layout: 'top',
  data() {
    return {
      entries: [
        {
          id: 1,
          url: 'queque',
          title: 'QueQue',
          category: 'UI/UXデザイン',
          thumb: 'images/queque-main-image.jpg',
          year: 2019
        },
        {
          id: 2,
          url: 'shallwelotte',
          title: 'Shall we Lotte',
          category: 'UIデザイン／ビジュアルデザイン／マークアップ',
          thumb: 'images/swl-main-image@1000w.jpg',
          year: 2019
        },
        {
          id: 3,
          url: 'kaizen',
          title: 'UIカイゼン',
          category: 'UI/UXデザイン／マークアップ／企画／進行',
          thumb: 'images/kaizen-main-image@0,25x.jpg',
          year: 2019
        },
        {
          id: 4,
          url: 'premium',
          title: 'J-CASTニュース会員化',
          category: 'UI/UXデザイン／マークアップ／ビジュアルデザイン／企画／運営',
          thumb: 'images/premium-main-image@1000w.jpg',
          year: 2018
        },
        {
          id: 5,
          url: 'justmysound',
          title: 'わたしのオト',
          category: 'UIデザイン／ビジュアルデザイン／マークアップ',
          thumb: 'images/jms-main-image@1000w.jpg',
          year: 2018
        },
        {
          id: 6,
          url: 'mint',
          title: 'ミントの世界',
          category: 'UIデザイン／ビジュアルデザイン／マークアップ',
          thumb: 'images/mint-main-image@1000w.jpg',
          year: 2017
        },
        
        {
          id: 7,
          url: 'toidasmypage',
          title: 'トイダス マイページ',
          category: 'UI/UXデザイン／マークアップ',
          thumb: 'images/toidas-mypage-main-image@1000w.jpg',
          year: 2017
        },
        {
          id: 8,
          url: 'toidasvote',
          title: 'トイダス 投票',
          category: 'UI/UXデザイン／マークアップ',
          thumb: 'images/toidas-vote-main-image@1000w.jpg',
          year: 2016
        },
        {
          id: 9,
          url: 'toidas',
          title: 'トイダス',
          category: 'UIデザイン／ビジュアルデザイン／企画／運営',
          thumb: 'images/toidas-main-image@0,25x.jpg',
          year: 2016
        },
        {
          id: 10,
          url: 'graphic',
          title: 'ロゴ・グラフィック',
          category: 'グラフィックデザイン',
          thumb: 'images/logo-main-image.jpg',
          year: 2019
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
.subinfo {
  display: flex;
  @apply mx-auto px-4 text-gray-700;
  .new {
    display: inline-block;
    transform: rotate(90deg);
    @screen md {
      transform: rotate(45deg);
    }
  }
  .old {
    display: inline-block;
    transform: rotate(90deg);
    @screen md {
      transform: rotate(45deg);
    }
  }
  .material-icons {
    font-size: 20px;
  }
}
.button {
  @apply bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>
