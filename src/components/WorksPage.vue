<template>
<div class="contents">
  <div class="works">
    <h1>Works</h1>
    <div class="work">
      <div class="work-box">
        <img class="work-picture" src="../assets/work2.png"/>
        <p1>チャットアプリ</p1>
        <p2>スクールのカリキュラムにて作成。</p2>
        <p2>Haml/Sass/Ruby on Rails/Jquery/AWS</p2>
        <a href= "https://github.com/iris5115/chat-space" target="_blank">git hub</a>
      </div>
      <div class="work-box">
        <img class="work-picture" src="../assets/work1.png"/>
        <p1>ポートフォリオ</p1>
        <p2>自分自身のポートフォリオです。</p2>
        <p2>HTML/CSS/Vue.js/Firebase</p2>
        <a href= "https://github.com/iris5115/portfolio" target="_blank">git hub</a>
      </div>
      <div class="work-box">
        <div class="no-work-box">準備中</div>
      </div>
      <div class="work-box">
        <div class="no-work-box">準備中</div>
      </div>
      <div class="work-box">
        <div class="no-work-box">準備中</div>
      </div>
      <div class="work-box">
        <div class="no-work-box">準備中</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

</script>

<style scoped>
@media (min-width: 1000px)
{
  h1 {
    text-align: center;
    font-size: 60px;
  }
  p1 {
    font-size: 20px;
    display: block;
    padding-bottom: 15px;
  }
  p2 {
    font-size: 15px;
    display: block;
    padding-top: 10px;
  }
  a {
    font-size: 15px;
    display: block;
    text-decoration: none;
    padding-top: 15px;
  }
  .work {
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 30px;
  }
  .work-box {
    width: 25%;
    min-width: 350px;
    min-height: 350px;
    box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
    background-color: #ffffff;
    border-radius: 20px;
    padding: 30px;
    margin: 20px;
    text-align: center;
  }
  .work-picture {
    width:100%;
    padding-bottom: 15px;
  }
  .no-work-box {
    min-width: 350px;
    min-height: 200px;
    background: #f3f3f3;
    margin: 0 auto;
    text-align: center;
    line-height: 200px;
    font-size: 40px;
  }
}
@media (max-width: 1000px)
{
  h1 {
    text-align: center;
    font-size: 40px;
    margin: 15px auto;
  }
  p1 {
    font-size: 15px;
    display: block;
    padding-bottom: 10px;
  }
  p2 {
    font-size: 12px;
    display: block;
    padding-top: 5px;
  }
  a {
    font-size: 12px;
    display: block;
    text-decoration: none;
    padding-top: 10px;
  }
  .work {
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 30px;
  }
  .work-box {
    width: 80%;
    box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
    background-color: #ffffff;
    border-radius: 20px;
    padding: 30px;
    margin: 20px;
    text-align: center;
  }
  .work-picture {
    width:100%;
    padding-bottom: 40px;
  }
  .no-work-box {
    margin: 0 auto;
    text-align: center;
    line-height: 150px;
    font-size: 25px;
  }
}
</style>
