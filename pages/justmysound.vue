<template>
  <div>
    <div class="hero-image">
      <img src="images/jms-main-image.jpg" alt="私の音" class="w-full" lazy="loaded">
    </div>
    <article class="entry">
      <h1 class="main-title">わたしのオト</h1>
      <p class="sub-title">2018</p>
      <p>わたしのオトはソニーの高級カスタムイヤホンJust earの販促のためのオウンドメディアです。カスタムイヤホン市場を盛り上げながらJust earの認知向上、購買促進が目的です。UIデザイン・ビジュアルデザインとマークアップを担当しました。</p>
      <p class="small-text">プロダクトオーナー</p>
      <p>東京ヒアリングケアセンター／株式会社SONY</p>
      <p class="small-text">担当</p>
      <p>UIデザイン／ビジュアルデザイン／マークアップ</p>
      <p class="small-text">技術</p>
      <p>XD／anime.js／bulma／MovableType</p>
      <p class="small-text">URL</p>
      <p>https://j-cast.com/justmysound/</p>
      <h2 class="heading">カラーリング</h2>
      <p>
        イヤホンの金属部分のゴールドとその補色にちかい紺をメインカラーとし、落ち着きのある紺をプライマリーに設定しました。
      </p>
      <div class="image">
        <img src="images/jms-image-01@2x.jpg" alt="カラー" lazy="loaded">
      </div>
      <h2 class="heading">
        ロゴタイプ
      </h2>
      <p>
        Just earからJustをもらい、カスタムできる＝私にぴったりの音という事で「わたしのオト」というサイト名になりました。嗜好性を感じさせるため最新機種に対してあえてアンティークな印象の明朝体を選びました。
      </p>
      <div class="image">
        <img src="images/jms-image-02@2x.jpg" alt="ロゴ" lazy="loaded">
      </div>
      <h2 class="heading">
        最終成果物
      </h2>
      <p>
        高級感を演出するため余白をゆったりととり、 PVの阻害になるような不要な要素はできるだけ減らしました。クライアントからも好評でアーティストインタビューなどが人気となり、1つ25万円ほどしますが数台の売り上げを記録しました。
      </p>
      <div class="image">
        <img src="images/jms-design-image.jpg" alt="カラー" lazy="loaded">
      </div>
      <h2 class="heading">
        回遊改善
      </h2>
      <p>
        関連記事が文字だけだったものを、記事画像サムネイルも配置することによって関連記事のクリック率を向上させることに成功しました。記事内ではこの記事直下に配置している関連記事（おすすめ記事）のクリック率が最も重要な箇所です。
      </p>
      <div class="image">
        <img src="images/jms-image-03@2x.jpg" alt="" lazy="loaded">
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
      title: 'わたしのオト - 河西耕平のポートフォリオ'
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
          url: 'queque',
          title: 'QueQue',
          category: 'UI/UXデザイン',
          thumb: 'images/queque-main-image.jpg'
        }
      ]
    }
  }
}
</script>