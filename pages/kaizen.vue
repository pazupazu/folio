<template>
  <div>
    <div class="hero-image">
      <img src="images/kaizen-main-image.jpg" alt="" class="w-full" lazy="loaded">
    </div>
    <article class="entry">
      <h1 class="main-title">UIカイゼン</h1>
      <p class="sub-title">2019</p>
      <p>J-CASTニュースは10年以上運営を行なっているメディアで、様々な箇所にほころびがでていました、それらを少しずつ改修するのが目的です。わたしは進行、UIデザイン、実装を担当しました</p>
      <p class="small-text">プロダクトオーナー</p>
      <p>株式会社ジェイ・キャスト</p>
      <p class="small-text">担当</p>
      <p>ファシリテーション／プロトタイプ／UIデザイン</p>
      <p class="small-text">技術</p>
      <p>MovableType</p>
      <p class="small-text">URL</p>
      <p>https://j-cast.com/</p>
      <h2 class="heading">課題と目指すべき方向</h2>
      <p>
        J-CASTニュースは定期的に大幅なリニューアルでUIの改修を行なっていましたが、それだと時間もコストもかかります、徐々にユーザーが減っていることも問題でした。<br />
        そこでわたしはリニューアルではなく、部分的な改修をすばやく行って仮説検証を繰り返し徐々によくしていこうという提案を行いました。<br />
        各ステークホルダーと協議し、ある程度の自治権を開発部に譲渡してもらいリリースフローの確立により自走可能なプロジェクトになりました。
      </p>
      <h2 class="heading">
        ナビゲーションの整理
      </h2>
      <p>
        一部のチャンネルのみ、他のチャンネルと異なるデザインのままでナビゲーションが使いづらかったため改修しました。
      </p>
      <div class="image">
        <img src="images/kaizen-image-01@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        ナビゲーションの整理
      </h2>
      <p>
        ドロワーナビゲーションに様々な色が使われており、明らかに見た目の問題とアクセシビリティの問題があったため改修しました。
      </p>
      <div class="image">
        <img src="images/kaizen-image-02@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        トップ記事のサイズアップ
      </h2>
      <p>
        スマートフォントップページの記事を大きくすることでコントラストが強くなり、クリック率の向上が期待できると考えました。結果的に2%程度の向上が見られました。
      </p>
      <div class="image">
        <img src="images/kaizen-image-03@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        トップ記事のサイズアップ
      </h2>
      <p>
        スマートフォントップページの記事１本目をさらに改修し、画像の上に文字を重ね、省スペース化することでもう１本記事をファーストビューに格納します。しかし、これは成績向上が見れませんでした。
      </p>
      <div class="image">
        <img src="images/comment-image-04@2x.jpg" alt="" lazy="loaded">
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
      title: 'UI改善 - 河西耕平のポートフォリオ'
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