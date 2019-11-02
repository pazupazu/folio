<template>
  <div>
    <div class="hero-image">
      <img src="images/logo-main-image.jpg" alt="" class="w-full" lazy="loaded">
    </div>
    <article class="entry">
      <h1 class="main-title">ロゴ・グラフィックス</h1>
      <p class="sub-title">2019</p>
      <p>企画に合わせてロゴやフライヤーを作成しました</p>
      <p class="small-text">プロダクトオーナー</p>
      <p>株式会社ジェイ・キャスト</p>
      <p class="small-text">担当</p>
      <p>グラフィックデザイン</p>
      <p class="small-text">技術</p>
      <p>Illustrator</p>
      <h2 class="heading">
        TREND TOKYO
      </h2>
      <p>
       中国で日本のニュースを伝えるためのブランドです。weibo上での展開が想定されていました。新鮮さを表すイエロー、トレンド感を出す細身のウェイト。
      </p>
      <div class="image">
        <img src="images/logo-image-01@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        天安門クロニクル
      </h2>
      <p>
        いまだに真相がはっきりしない天安門事件を事件当時取材していた記者が振り返る企画です。NHKの特番っぽい感じを意識しています。
      </p>
      <div class="image">
        <img src="images/logo-image-02@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        訪ねて発見東洋文庫の魅力
      </h2>
      <p>
        国内有数の書庫を表現するためのややオールドな明朝体、両立するポップさの表現のための星マーク。
      </p>
      <div class="image">
        <img src="images/logo-image-03@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        ネットニュースの明日
      </h2>
      <p>
        ネットニュースのあるべき姿を模索するという情熱を表現する太いウェイト、力強く直線的なフォルム。
      </p>
      <div class="image">
        <img src="images/logo-image-04@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        フライヤー
      </h2>
      <p>
        リアルイベントやオフラインマーケティングの一環としてフライヤーを製作しています。
      </p>
      <div class="image">
        <img src="images/logo-image-05@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        バナーなど
      </h2>
      <div class="image">
        <img src="images/logo-image-06@2x.jpg" alt="" lazy="loaded">
      </div>
      <div class="image">
        <img src="images/logo-image-07@2x.jpg" alt="" lazy="loaded">
      </div>
      
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
      title: 'ロゴ・グラフィックス - 河西耕平のポートフォリオ'
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