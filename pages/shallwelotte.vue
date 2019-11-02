<template>
  <div>
    <div class="hero-image">
      <img src="images/swl-main-image.jpg" alt="shall we lotte" class="w-full" lazy="loaded">
    </div>
    <article class="entry">
      <h1 class="main-title">Shall we Lotte</h1>
      <p class="sub-title">2019</p>
      <p>Shall we Lotteはロッテのオウンドメディアです。いままで社内のみ配布していた広報誌をWeb上にも公開していこうというものです。ロッテ社は非常に長い歴史をもつブランドですが、より一層のブランドイメージ向上のための施策の一つとしてオウンドメディアが持ち上がりました。UIデザインとビジュアルデザイン、マークアップを担当しました。バックエンドはロッテの自社HP用のCMSです。</p>
      <p class="small-text">プロダクトオーナー</p>
      <p>株式会社ロッテ</p>
      <p class="small-text">担当</p>
      <p>UIデザイン／ビジュアルデザイン／マークアップ</p>
      <p class="small-text">技術</p>
      <p>XD／Nuxt.js／Storybook／Contentful／PWA</p>
      <p class="small-text">URL</p>
      <p>https://www.lotte.co.jp/entertainment/shallwelotte/</p>
      <h2 class="heading">ターゲット・イメージマッピング</h2>
      <div class="image">
        <img src="images/swl-image-01@2x.jpg" alt="イメージマッピング図">
      </div>
      <p>
        まず私はこのオウンドメディアのターゲット層とそれにともなうイメージマッピングをおこないました。コーポレートサイトからの流入が大きいとみて、3,40代女性をメイン、次に50代の男性をターゲット層とおきました。
      </p>
      <h2 class="heading">
        サイトどこに置くのか問題が発生
      </h2>
      <p>
        オウンドメディアがロッテのコーポレートサイト内に配置されるのか、それとも比較的独立した外部リンクとして配置されるのかが不透明だったためデザインのイメージは難航しました、独立していればいればコーポレートサイトとのイメージの差は広げて問題ありません。コーポレートサイト内であり、グローバルナビゲーションが設置されていればイメージの差があまりにもありすぎるのは好ましくありません。
      </p>
      <div class="image">
        <img src="images/swl-image-02@2x.jpg" alt="初期提案" lazy="loaded">
        <div class="caption">初期提案</div>
      </div>
      <div class="image">
        <img src="images/swl-image-03@2x.jpg" alt="第２段階" lazy="loaded">
        <div class="caption">Ver.2</div>
      </div>
      <div class="image">
        <img src="images/swl-image-04@2x.jpg" alt="第３段階" lazy="loaded">
        <div class="caption">Ver.3</div>
      </div>
      <h2 class="heading">
        最終成果物
      </h2>
      <p>
        最終的に、ロッテのコーポレートサイト内に配置し、グローバルナビゲーションにもリンクが追加されました。 落ち着いていて文化的なイメージもありつつトレンド感も感じさせるデザインにしました。
      </p>
      <div class="image">
        <img src="images/swl-design-image.jpg" alt="最終成果物イメージ" lazy="loaded">
      </div>
      <h2 class="heading">
        流入PVが少ない問題への改善
      </h2>
      <p>
        当初の想定よりもコーポレートサイトからの流入よりもTwitterなどSNSからの流入が多く、かつ行動成績（ページ／セッションや滞在時間など）がよかったためより一層の流入を期待してOGイメージをサイズアップし、可能な範囲でキャッチを入れる改善を行いました。またシェアボタンを見出し直下にも配置しました。
      </p>
      <div class="image">
        <img src="images/swl-image-05@2x.jpg" alt="" lazy="loaded">
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
export default {
  head () {
    return {
      title: 'Shall we Lotte - 河西耕平のポートフォリオ'
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
          url: 'premium',
          title: 'J-CASTニュース会員化',
          category: 'UI/UXデザイン／マークアップ／ビジュアルデザイン／企画／運営',
          thumb: 'images/premium-main-image@1000w.jpg'
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