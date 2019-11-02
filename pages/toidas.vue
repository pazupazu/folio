<template>
  <div>
    <div class="hero-image">
      <img src="images/toidas-main-image.jpg" alt="" class="w-full" lazy="loaded">
    </div>
    <article class="entry">
      <h1 class="main-title">トイダス</h1>
      <p class="sub-title">2016</p>
      <p>トイダスは日本最大級のクイズ・診断プラットフォームです。ユーザーがクイズの投稿ができ、またクイズを誰でも解くことができます。サービスの立ち上げのデザインから参加し、その後の運営に深くかかわりました。</p>
      <p class="small-text">プロダクトオーナー</p>
      <p>株式会社ジェイ・キャスト</p>
      <p class="small-text">担当</p>
      <p>プロトタイプ／UIデザイン</p>
      <p class="small-text">技術</p>
      <p>Vue.js／Fuel</p>
      <p class="small-text">URL</p>
      <p>https://toidas.net/</p>
      <h2 class="heading">サイト側</h2>
      <p>
        サイトのビジュアルを担当しました。コンセプトとして「バカっぽさ」があり、オモコロやボケてなどのサイトのイメージを踏襲しました。クイズからラーニングコンテンツまで作成できるため「小学校のテスト」をイメージしています。
      </p>
      <div class="image">
        <img src="images/toidas-image-01@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        問題側
      </h2>
      <p>
        実際にクイズ・診断を解く画面です、こちらもUIを担当しています。クイズでは正解不正解でバイブレーションさせるなどのギミックがあります（Android）。
      </p>
      <div class="image">
        <img src="images/toidas-image-02@2x.jpg" alt="" lazy="loaded">
      </div>
      <h2 class="heading">
        様々な企画
      </h2>
      <p>
        クイズ作問コンテストを開催したり、日本クイズ協会とのコラボレーションを行なったり、コンテスト受賞者にバッジを付与したりなどユーザーに楽しんでもらえるよう様々な企画を行いました。それらの実行に向けて開発、ビジュアルの作成などを行いました。
      </p>
      <div class="image">
        <img src="images/logo-image-06@2x.jpg" alt="" lazy="loaded">
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
          url: 'premium',
          title: 'J-CASTニュース会員化',
          category: 'UI/UXデザイン／マークアップ／ビジュアルデザイン／企画／運営',
          thumb: 'images/premium-main-image@1000w.jpg'
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