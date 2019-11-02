<template>
  <div>
    <div class="hero-image">
      <img src="images/premium-main-image.jpg" alt="" class="w-full" lazy="loaded">
    </div>
    <article class="entry">
      <h1 class="main-title">J-CASTニュース 会員サービス</h1>
      <p class="sub-title">2018</p>
      <p>J-CASTニュースは今までのメルマガに加えコメント欄の強化、会員限定のコンテンツなどを楽しめる会員サービスを開始しました。わたしはコメント欄と限定コンテンツに関するリサーチ、企画、UIデザイン、ビジュアルデザインを担当しました。</p>
      <p class="small-text">プロダクトオーナー</p>
      <p>株式会社ジェイ・キャスト</p>
      <p class="small-text">担当</p>
      <p>リサーチ／企画／UIデザイン／ビジュアルデザイン</p>
      <p class="small-text">技術</p>
      <p>MovableType</p>
      <p class="small-text">URL</p>
      <p>https://j-cast.com/premium/</p>
      <h2 class="heading">課題</h2>
      <p>
        コメント欄に関してはすでに会員でなくても書き込み可能な仕組みでした、そのため会員になることでより一層楽しめる形にする必要がありました。また限定コンテンツに関してはJ-CASTニュースのユーザー層とのマッチングが必要でした。
      </p>
      <h2 class="heading">
        リサーチ
      </h2>
      <p>
        コメント欄に関して<br />J-CASTニュースの目指すべきコメント欄を模索します、まずJ-CASTニュースはYahooからのアクセスが非常に多いためYahooのコメント欄を参考にします、ヤフコメにある機能は概ね再現した方がよいだろうと考えました。次にわたしはガールズちゃんねる、ニコニコニュースなど「ニュースを題材にコミュニケーションをする」サービスを参考に、コメントへのリアクションによってコメント自体のビジュアルに変化をつけようと考えました。
      </p>
      <div class="image">
        <img src="images/comment-image-01@2x.jpg" alt="" lazy="loaded">
      </div>
      <p>
        会員限定コンテンツに関して<br />コメント欄はすでに利用しているユーザー数が把握できていたため今後の見通しも立ちやすいものでしたが、さらなる会員数増加に向け目玉となるコンテンツが必要でした、そこでユーザー層に合わせたプレミアムなコンテンツを企画するため、外部著者を探すことにしました。わたしは東洋経済やNewsPicksなどを参考に、SNSのフォロワー数、予想チャーンと予算上での連載可能数から目標会員数に到達できそうな人物を調べました。それらを満たす人物の一人が山里亮太さんでした。
      </p>
      <div class="image">
        <img src="images/premium-image-01@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        コメント欄の状態整理と画面遷移
      </h2>
      <p>
        コメント欄はシンプルなデザインですが比較的状態が多く、画面の遷移もありました。画面の遷移や誘導方法によって会員増加数や収益に関わってくると考えていたためステークホルダーへの説明のためにもほとんどの場合の画面を作成しました。
      </p>
      <div class="image">
        <img src="images/comment-image-02@2x.jpg" alt="" lazy="loaded">
      </div>
      <div class="image">
        <img src="images/comment-image-03@2x.jpg" alt="" lazy="loaded">
      </div>
      <div class="image">
        <img src="images/comment-image-04@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        限定コンテンツごとのビジュアルと一覧ページ
      </h2>
      <p>
        限定コンテンツを魅力的に見せるためコンテンツごとにアートワークを作成することにしました。また記事の一覧ページをコンテンツの説明も兼ねたランディングページとしました。わたしはさらにコンテンツを横断するエントランスページの必要を訴え作成しました。Netflixのホーム画面のようなものです、しっかりと会員になるメリットがわかりやすいそのページはPVこそ低いものの会員登録の完了率は高いものでした。
      </p>
      <div class="image">
        <img src="images/premium-design-image.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        会員増加への改善
      </h2>
      <p>
        まず、コメント欄の改善を行いました。 コメント欄は登録を試みる人が多いにも関わらず完了率は低かったためコメントするには会員登録が必要であること、登録は簡単であることを示し、コメントの入力を先にさせてから会員登録させるという流れも可能にしたことで完了率は2倍に改善しました。
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
      title: 'J-CAST会員サービス - 河西耕平のポートフォリオ'
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
          url: 'kaizen',
          title: 'UIカイゼン',
          category: 'UI/UXデザイン／マークアップ／企画／進行',
          thumb: 'images/kaizen-main-image@0,25x.jpg'
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