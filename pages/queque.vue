<template>
  <div>
    <div class="hero-image">
      <img src="images/queque-main-image.jpg" alt="" class="w-full" lazy="loaded">
    </div>
    <article class="entry">
      <h1 class="main-title">QueQue</h1>
      <p class="sub-title">2019</p>
      <p>QueQueはトイダスの改良版で法人向けを意識したクイズ・診断・サーベイSaaSです。サイト内での埋め込みや単体での利用でユーザーインサイトを知るが目的です。わたしはリサーチ、プロトタイプ、UIデザインを担当しました。現在開発中。</p>
      <p class="small-text">プロダクトオーナー</p>
      <p>株式会社ジェイ・キャスト</p>
      <p class="small-text">担当</p>
      <p>リサーチ／プロトタイプ／UIデザイン</p>
      <p class="small-text">技術</p>
      <p>Figma／ant-design／Nuxt.js／Storybook</p>
      <p class="small-text">URL</p>
      <p>開発中のため公開URLはまだありません</p>
      <h2 class="heading">課題</h2>
      <p>
        現状のトイダスの問題点と企業のニーズの間を埋めていくためのプロダクトが必要となった、また完成後はトイダスにも移植可能なものを目指します。
      </p>
      <p class="small-text">
        主なトイダスの課題
      </p>
      <ul class="list-disc mx-auto w-md">
        <li>単体で成立するURLが存在しない</li>
        <li>加算型の診（yesを何回選んだひとは〇〇タイプ、など）がない</li>
        <li>結果から別ページへの誘導が弱い</li>
        <li>作成画面がわかりづらい</li>
        <li>スマートフォンへの最適化が進んでいない</li>
      </ul>
      <h2 class="heading">
        プレイヤー
      </h2>
      <p>
        わたしたちはまずプレイヤーから作成することにしました。instgramなどを参考に、横スライド、1画面1問題としました。あくまでもスマートフォンに最適化します。
      </p>
      <div class="image">
        <img src="images/queque-image-01@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        管理画面のリサーチ
      </h2>
      <p>
        BtoB SaaSとして展開しているフォーム、サーベイ系サービスをリサーチしました。作成画面、エンドユーザー向け画面、プライシングなどを調査し、必要な画面、機能の洗い出しを行いました。
      </p>
      <div class="image">
        <img src="images/queque-image-02@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        プロトタイプとモックアップ
      </h2>
      <p>
        私たちはデザインを完全に完成させるよりもまず動くものを作成し、社内メンバーなどに触ってもらってフィードバックを得て洗練させていこうと考えました。UIフレームワークであるAnt Designを採用しました。
      </p>
      <div class="image">
        <img src="images/queque-image-03@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        課題：結果画面へのコンポート追加
      </h2>
      <p>
        ランディングページへの誘導とユーザーが知りたい結果、そしてSNSでシェア（スクショ含む）されるページとして重要なニーズがクロスしている結果画面をいかに魅力的にかつ作りやすくするかを考え、画像やチャートなど様々なコンポーネントを自在に組み合わせれるようにしました。
      </p>
      <div class="image">
        <img src="images/queque-image-04@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        課題：結果を表示するための配点UI
      </h2>
      <p>
        複数の結果を質問への回答によって切り分ける必要がありました。質問の作成やスタート画面の作成の場合は比較的シンプルで、「質問」オブジェクトが主語であれば問題ありませんでした、しかし配点の場合は「結果」を主語にして、点数を付加していくとわかりづらく、点数を先に決めてそこに結果を当てはめるほうが直感的であると判断しました。
      </p>
      <div class="image">
        <img src="images/queque-image-05@2x.jpg" alt="" lazy="loaded">
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
          url: 'toidas',
          title: 'トイダス',
          category: 'UIデザイン／ビジュアルデザイン／企画／運営',
          thumb: 'images/toidas-main-image@0,25x.jpg'
        },
        {
          id: 3,
          url: 'toidasmypage',
          title: 'トイダス マイページ',
          category: 'UI/UXデザイン／マークアップ',
          thumb: 'images/toidas-mypage-main-image@1000w.jpg'
        }
      ]
    }
  }
}
</script>