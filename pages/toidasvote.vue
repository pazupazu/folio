<template>
  <div>
    <div class="hero-image">
      <img src="images/toidas-vote-main-image.jpg" alt="" class="w-full" lazy="loaded">
    </div>
    <article class="entry">
      <h1 class="main-title">トイダス 投票</h1>
      <p class="sub-title">2016</p>
      <p>トイダス投票はトイダス上で投票フォームを作成する機能です。エンドユーザーが実際に投票する画面と、作成画面が必要でした。私はUIデザインを担当しました。</p>
      <p class="small-text">プロダクトオーナー</p>
      <p>株式会社ジェイ・キャスト</p>
      <p class="small-text">担当</p>
      <p>プロトタイプ／UIデザイン</p>
      <p class="small-text">技術</p>
      <p>XD／Nuxt.js</p>
      <h2 class="heading">課題</h2>
      <p>
        社内の需要としてニュース記事を読み終わったあとあなたはどう思う？などの意見調査を行い、さらにそれを記事化、読者層の把握にも活用したいというニーズがありました。
      </p>
      <p class="small-text">
        必要な要件
      </p>
      <ul class="list-disc mx-auto w-md">
        <li>記事ページ(HTML)上に埋め込み可能</li>
        <li>SNSのフォロワー以外にも到達できる</li>
        <li>データの集計</li>
        <li>回答画面</li>
        <li>作成画面</li>
      </ul>
      <h2 class="heading">
        リサーチ
      </h2>
      <p>
        Twitterの投票画面をリサーチ、トレースしていくことで機能を把握しました。またplayBuzzなど海外サービスも参考にしました。
      </p>
      <h2 class="heading">
        プロトタイプとモックアップ
      </h2>
      <p>
        コンセプトがわかるプロトタイプをすばやく作成しました。ステークホルダーと確認しあい、大きな機能の漏れなどがないか、遷移は問題がないかを確認しフィードバックを柔軟に反映させました。
      </p>
      <div class="image">
        <img src="images/toidas-vote-image-01@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        編集中と並び替えの切り替え
      </h2>
      <p>
        テキストの編集とドラッグ＆ドロップでの並び替えを並列で行わせようとするとテキストを打ったあと、そのテキストをドラッグで選択する際に並び替えの動作が発火してしまう問題がありました。それを解決するためわたしたちは「移動・削除」のモーダルな状態を追加しました。
      </p>
      <div class="image">
        <img src="images/toidas-vote-image-02@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        ヒント機能の追加
      </h2>
      <p>
       初回起動時にウォークスルーとして機能の紹介がなされますが、それをいつでも呼び出せるように改修しました。画像ありなしごとに説明を切り分け、位置をあわせていくのに苦心しました。
      </p>
      <div class="image">
        <img src="images/toidas-vote-image-03@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        最終成果物
      </h2>
      <p>
        クリーンなイメージを心がけ、1つの画面に機能を盛り込みすぎず、なるだけ心理的負荷の少ないようにしました。またまたスマートフォンでも作成できるようレスポンシブデザインとして作成しました。
      </p>
      <div class="image">
        <img src="images/toidas-vote-design-image.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        今後の展開
      </h2>
      <p>
        投票の作成画面が出来上がったタイミングでわたしはこの作成画面を現在のクイズ・診断にも応用し作成画面のスマートフォン対応が可能か試してみました。いくつものナビゲーションのアイデアを出し、機能実現が可能か試作しました。
      </p>
      <div class="image">
        <img src="images/toidas-vote-image-04@2x.jpg" alt="" lazy="loaded">
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