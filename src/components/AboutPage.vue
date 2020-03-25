<template>
<div class="contents">
  <div class="left-contents">
    <div class="profiles">
      <div class="profile">
        <div class="left-profile">
          <img class="my-image-picture" src="../assets/my-image-picture.png"/>
        </div>
        <div class="right-profile">
          <h1>Profile</h1>
          <p1>まさしょーです。０から１を作るエンジニアの仕事に憧れ、2020年1月から転職に向け本格的にプログラミングを勉強中！<br>
          プライベートでは自身のスキル向上も兼ねてwebサービスの個人開発をしています。<br>
          最近、機械学習に興味が出てきたのでPythonを使ったサービスを作ることを検討中。</p1>
        </div>
      </div>
    </div>
    <div class="skills">
      <h1>Skill</h1>
      <div class="skill">
        <div class="skill-box" v-for="(item, index) in items" :key=index>
          <h2> {{ item.title }} </h2><br>
          <p2> {{ item.text }} </p2>
        </div>
      </div>
    </div>
  </div>
  <div class="right-contents">
    <div class="histories">
      <h1>History</h1>
      <div class="history">
        <div class="history-box" v-for="(list, index) in lists" :key=index>
          <h3> {{ list.title }} </h3><br>
          <p3> {{ list.text }} </p3>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AboutPage',
  data () {
    return {
      items: [
        { title: 'Ruby on Rails', text: 'MVCの考え方やWebサービスの基礎を学ぶために習得。個人開発における中心言語。' },
        { title: 'HTML&CSS', text: 'webサイトを作成するために使用。HamlやSassを使ったり使わなかったり。' },
        { title: 'MySQL', text: 'スクールでの制作物や共同開発に使用。RDBMSの勉強は現状の課題の一つ。' },
        { title: 'Javasqript', text: 'JQueryやVue.jsを使用。かっこいいサイトを作りたいので毎日勉強中。' },
        { title: 'Github', text: '個人開発や共同開発の際に使用。これからもどんどん草を生やしていきます。' },
        { title: 'C言語', text: 'ゲーム運営会社に入る前に少し勉強していました。' }
      ],
      lists: [
        { title: '2016年8月', text: 'ゲームが好きだったこともあり、ゲーム運営会社に入社。' },
        { title: '2017年2月', text: '充実はしていたものの、プライベートがほとんどない働き方に疑問を持つようになる。' },
        { title: '2017年9月', text: '担当していた仕事が一段落する。祖母の介護をしたことがきっかけで介護士に転職する。' },
        { title: '2017年12月', text: '介護福祉士になるために必要な介護職員初任者研修の資格を入手。この頃から働き方や生き方を模索するようになる。' },
        { title: '2019年2月', text: '沖縄のマラソン大会にて偶然バスで隣になった海外に勤めているエンジニアの人とお話をして、今まで無縁だったエンジニアの働き方や仕事内容を知る。' },
        { title: '2019年4月', text: '０から１を作るエンジニアの仕事に憧れを持つようになる。転職するための貯金を開始する。' },
        { title: '2019年9月', text: '介護士からプログラマーに転職するために仕事を辞めてスクールに通うことを決意。' },
        { title: '2020年1月', text: 'PGスクールTECHEXPERTに入学。プログラミングに没頭し、webサービスの基礎を学ぶ。3月27日に卒業予定。' }
      ]
    }
  }
}

</script>

<style scoped>
@media (min-width: 1000px)
{
  h1 {
    font-size: 40px;
  }
  .contents{
    width: 100%;
    display: flex;
  }
  .left-contents{
    width: 55%;
    min-width: 600px;
    height: 100%;
  }
  .profiles{
    width: 100%;
    padding: 40px 0 20px 0;
  }
  .profile{
    width: 80%;
    min-width: 480px;
    box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
    background-color: #ffffff;
    border-radius: 20px;
    padding: 30px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
  }
  .left-profile{
    height: 100%;
    margin: 20px;
    padding-right: 20px;
  }
  .my-image-picture{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-position: center center;
    background-color: white;
  }
  .right-profile{
    width: 50%;
    height: 100%;
  }
  p1 {
    padding-top: 40px;
  }
  .skills{
    width: 80%;
    min-width: 500px;
    margin: 30px auto;
    box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
    background-color: #ffffff;
    border-radius: 20px;
    padding: 30px;
  }
  .skill{
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .skill-box{
    width: 40%;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
    background-color: #ffffff;
    border-radius: 20px;
  }

  .right-contents{
  width: 40%;
  min-width: 550px;
  height: 100%;
  padding-top: 40px;
  }
  .histories{
    width: 90%;
    box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
    background-color: #ffffff;
    border-radius: 20px;
    margin: 0 auto;
    padding: 30px 30px 60px;
  }
  .history{
    margin: 0 auto;
  }
  .history-box{
    margin: 30px auto;
  }
}

@media (max-width: 1000px)
{
h1 {
    font-size: 30px;
  }
  .contents{
    width: 100%;
  }
  .left-contents{
    width: 90%;
    margin: 0 auto;
  }
  .profiles{
    padding: 40px 0 20px 0;
  }
  .profile{
    box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
    background-color: #ffffff;
    border-radius: 20px;
    padding: 30px;
    justify-content: space-around;
    margin: 0 auto;
  }
  .left-profile{
    height: 100%;
    padding-right: 20px;
    text-align: center;
  }
  .my-image-picture{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-position: center center;
    background-color: white;
  }
  .right-profile{
    height: 100%;
  }
  p1 {
    padding-top: 40px;
  }
  h2 {
    font-size: 20px;
  }
  p2 {
    font-size: 13px;
  }
  .skills{
    width: 80%;
    margin: 30px auto;
    box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
    background-color: #ffffff;
    border-radius: 20px;
    padding: 30px;
  }
  .skill{
    margin: 0 auto;
  }
  .skill-box{
    width: 80%;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
    background-color: #ffffff;
    border-radius: 20px;
  }

  .right-contents{
  width: 90%;
  height: 100%;
  padding: 25px 0;
  margin: 0 auto;
  }
  .histories{
    box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
    background-color: #ffffff;
    border-radius: 20px;
    padding: 30px;
  }
  .history-box{
    margin: 35px auto;
  }
}
</style>
