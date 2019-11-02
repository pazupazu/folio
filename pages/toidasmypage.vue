<template>
  <div>
    <div class="hero-image">
      <img src="images/toidas-mypage-main-image.jpg" alt="" class="w-full" lazy="loaded">
    </div>
    <article class="entry">
      <h1 class="main-title">トイダス マイページ</h1>
      <p class="sub-title">2017</p>
      <p>トイダスのマイページをリニューアルしました。マイページでは回答履歴と策問履歴が見れるようになります。私はUIデザインを担当しました。</p>
      <p class="small-text">プロダクトオーナー</p>
      <p>株式会社ジェイ・キャスト</p>
      <p class="small-text">担当</p>
      <p>プロトタイプ／UIデザイン</p>
      <p class="small-text">技術</p>
      <p>XD／Bulma／Nuxt.js</p>
      <h2 class="heading">課題</h2>
      <p>
        J-CASTニュースの会員化にともないトイダスではIDの移行が必要になり、機能追加して移行を促そうとなりました。
      </p>
      <p class="small-text">
        必要な要件
      </p>
      <ul class="list-disc mx-auto w-md">
        <li>作問履歴だけでなく、回答履歴も残せるように</li>
        <li>公開した問題へのリアクションが見れるように</li>
        <li>回答をシェアした時のOGPを動的出力、ランディングページの改修</li>
        <li>プロフィールの登録と編集</li>
      </ul>
      <h2 class="heading">
        リサーチ
      </h2>
      <p>
        まずトイダスの結果をスクショして投稿するユーザーの存在がアイデアの元となりました。同時に質問箱などの「テキストを動的に画像化してOGPにする」スタイルが市民権を得てきていました。その手の投稿ができるアプリケーションの調査を行いました。またnoteなどUGC投稿型のサービスのマイページを調査しました。
      </p>
      <h2 class="heading">
        OGPを結果ごとに動的出力
      </h2>
      <p>
        動的にOGPを出力するときに問題なのは限られたスペースの中に可変する情報を納めなければならない点でした。それでいてタイムラインで目立つこと、パッと見たときに読めること、 情報量が多くなったときの表示などに気をつけました。
      </p>
      <div class="image">
        <img src="images/toidas-mypage-image-01@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        最終成果物
      </h2>
      <p>
        回答履歴の成績表示、全国平均との比較、作問履歴から編集画面、ステータスの管理インプレッション数などの表示などを行いました。グラフィック的にはトレンドを意識してやや色味を強く、オブジェクトの角丸を大きめにしました。
      </p>
      <div class="image">
        <img src="images/toidas-mypage-design-image.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        トイダスのユーザー登録キャンペーン
      </h2>
      <p>
       新規登録して、Twitterにシェアした人に対してお米をプレゼントするキャンペーンを行いました。ビジュアルデザインを担当しました。
      </p>
      <div class="image">
        <img src="images/toidas-mypage-cp-image.jpg" alt="" lazy="loaded">
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
      title: 'トイダス投票 - 河西耕平のポートフォリオ'
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
          url: 'toidas',
          title: 'トイダス',
          category: 'UIデザイン／ビジュアルデザイン／企画／運営',
          thumb: 'images/toidas-main-image@0,25x.jpg'
        },
        {
          id: 3,
          url: 'toidasvote',
          title: 'トイダス 投票',
          category: 'UI/UXデザイン／マークアップ',
          thumb: 'images/toidas-vote-main-image@1000w.jpg'
        }
      ]
    }
  }
}
</script>