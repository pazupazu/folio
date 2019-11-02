<template>
  <div>
    <div class="hero-image">
      <img src="images/mint-main-image.jpg" alt="ミントの世界" class="w-full" lazy="loaded">
    </div>
    <article class="entry">
      <h1 class="main-title">ミントの世界</h1>
      <p class="sub-title">2017</p>
      <p>ミントの世界はロッテのオウンドメディアです。ロッテの新商品「EAT MINT」の発売に伴ってミント市場を盛り上げて行くために作成されました。デザインとマークアップを担当しました。コンテンツマーケティングに触れ、サーチでも最終的に検索1ページ目まで上がりました。現在更新は停止しています。</p>
      <p class="small-text">プロダクトオーナー</p>
      <p>株式会社ロッテ</p>
      <p class="small-text">担当</p>
      <p>UIデザイン／ビジュアルデザイン／マークアップ</p>
      <p class="small-text">技術</p>
      <p>XD／anime.js／WordPress</p>
      <p class="small-text">URL</p>
      <p>https://ilovemint.net</p>
      <h2 class="heading">デザインアイデア</h2>
      <p>
        商品の名前や、画像を出さず、またミントの葉っぱに寄せないように苦心しました。そこで商品の幾何学的な模様を採用しました。また、ターゲット層は商品と同じく若い男性ビジネスマンがメインとしました。
      </p>
      <div class="image">
        <img src="images/mint-image-01@2x.jpg" alt="デザインアイデア" lazy="loaded">
      </div>
      <h2 class="heading">
        カラーリング
      </h2>
      <p>
        商品のカラーをベースにミントの葉っぱの色を加味したカラーをプライマリーにしました。
      </p>
      <div class="image">
        <img src="images/mint-image-02@2x.jpg" alt="カラー" lazy="loaded">
      </div>
      <h2 class="heading">
        ロゴ・マーク
      </h2>
      <p>
        商品のロゴとマッチできるように現代的なイメージで作成しました
      </p>
      <div class="image">
        <img src="images/mint-image-03@2x.jpg" alt="カラー" lazy="loaded">
      </div>
      <div class="image">
        <img src="images/mint-image-04@2x.jpg" alt="カラー" lazy="loaded">
      </div>
      <h2 class="heading">
        最終成果物
      </h2>
      <p>
        記事内回遊をしてもらうためランキング、おすすめの記事、前後記事、関連記事などを配置、 どれもWordPressのプラグインで出力が可能です。トップのイメージにはSVGアニメーションを採用しました。
      </p>
      <div class="image">
        <img src="images/mint-design-image.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        SEO改善
      </h2>
      <p>
        トップのSVGロゴがサイトタイトルだが、h1タグにしてSVGタイトルを記載することで「ミント」での検索ランクが上昇しました。また記事タイトルが比較的シンプルで一見すると内容がわからなかったものをややくどいがきちんと説明してあげることで検索ランクが上昇しました。スペアミントとペパーミントの違いやミントクイズなど人気のコンテンツを軸として最終的には「ミント」の検索で1ページ目上位までくるようになりました。
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
      title: 'ミントの世界 - 河西耕平のポートフォリオ'
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
          url: 'toidasvote',
          title: 'トイダス 投票',
          category: 'UI/UXデザイン／マークアップ',
          thumb: 'images/toidas-vote-main-image@1000w.jpg'
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