<template>
  <div>
    <div class="profile">
      <img src="images/profile-image.jpg" alt="">
    </div>
    <article class="entry">
      <h1 class="main-title mb-10">河西 耕平</h1>
      <p>
        1989年生まれ、大学でグラフィックデザインを専攻したのち写真スタジオで人物レタッチャーを経験後、ネットメディアJ-CASTでウェブデザイナーに転身。<br />
        得意ジャンルはメディアデザイン・ユーザーインタフェースデザイン・数値ベースでの改善など。1児の父。
        <br />080-3543-3587
        <br />kkouhei3@gmail.com
      </p>
      <h2 class="heading">
        株式会社ジェイ・キャスト
      </h2>
      <p>
        2015年 12月～現在<br />
        デザイナー兼マークアップエンジニア<br />
        J-CASTニュースをはじめとしたウェブメディア運営事業と受託開発事業
      </p>
      <ul class="list-disc mx-auto w-md">
        <li>トイダス - Webアプリケーションデザイン</li>
        <li>全薬販売 - コーポレートサイト作成</li>
        <li>ミントの世界 - オウンドメディアデザイン</li>
        <li>J-CASTニュース会員化 - ビジュアルデザイン、企画進行</li>
        <li>Shall we Lotte  - オウンドメディアデザイン</li>
        <li>わたしのオト - オウンドメディアデザイン</li>
        <li>QueQue - Webアプリケーションデザイン</li>
        <li>UI改善 - ユーザーインターフェースデザイン</li>
      </ul>
      <h2 class="heading">
        株式会社ユナイテッドワークス
      </h2>
      <p>
        2013年 04月～2015年 11月<br />
        レタッチャー兼デザイナー<br />
        主に個人の宣材写真撮影スタジオ
      </p>
      <ul class="list-disc mx-auto w-md">
        <li>人物写真レタッチ - レタッチ</li>
        <li>自社HPの更新業務 - マークアップ</li>
        <li>新規レタッチ事業のリード - デザイン、顧客対応</li>
        <li>ユーザー会員登録サービス</li>
      </ul>
      <h2 class="heading">
        多摩美術大学
      </h2>
      <p>
        2009年 04月～2013年 03月<br />
        グラフィックデザイン学科
      </p>
      <h2 class="heading">
        スキル・ツール
      </h2>
      <p class="break-words">
        HTML/CSS/SCSS/Sass/JavaScript/Nuxt.js/Vue.js/MobableType/Figma/Sketch/XD/Photoshop/Illustrator
      </p>
    </article>
    <h3 class="related-heading container">他にも見る</h3>
    <div class="cards container mx-auto">
        <card v-for="item in entries"
        :item="item"
        :key="item.id"
        ></card>
    </div>
  </div>
</template>

<script>
import card from '@/components/Card'

export default {
  head () {
    return {
      title: 'アバウト - 河西耕平のポートフォリオ'
    }
  },
  components: {
    card
  },
  data() {
    return {
      entries: [
        {
          id: 1,
          url: 'queque',
          title: 'QueQue',
          category: 'UI/UXデザイン',
          thumb: 'images/queque-main-image.jpg'
        },
        {
          id: 2,
          url: 'premium',
          title: 'J-CASTニュース会員化',
          category: 'UI/UXデザイン／マークアップ／ビジュアルデザイン／企画／運営',
          thumb: 'images/premium-main-image@1000w.jpg'
        },
        {
          id: 3,
          url: 'justmysound',
          title: 'わたしのオト',
          category: 'UIデザイン／ビジュアルデザイン／マークアップ',
          thumb: 'images/jms-main-image@1000w.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .profile {
    padding: 160px 0 80px;
    img {
      width: 200px;
      @apply rounded-full mx-auto
    }
  }
</style>