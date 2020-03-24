<template>
<div class="contents">
  <div class="title">
    <h1>Contacts</h1>
  </div>
  <div class="contact-box">
    <p>【以下のような人材を求めている企業はご連絡ください】</p><br>
    <div class="contact-text">
    <p1>・業界未経験でも、ポテンシャルのある人材を求めている企業</p1><br>
    <p1>・コミュニケーション能力があり、仲良く仕事ができる人材を求めている企業</p1><br>
    <p1>・自走力があり、積極的に勉強し成長していく人材を求めている企業</p1>
    </div>
    <div class ="tweet-box">
      <a href= "https://twitter.com/ms_osaka70pg" target="_blank">
      <img class="tweet-picture" src="../assets/Twitter_Logo_WhiteOnBlue.png"/>
      </a>
      <div class ="tweet-text">ご連絡はTwitterのDMよりお願いいたします。</div>
    </div>
  </div>
</div>


</template>

<script>

</script>

<style scoped>
.title {
  text-align: center;
}
h1{
  font-size: 40px;
  margin: 30px auto;
}
p{
  text-align: center;
}
p1{
  text-align: center;
}
.contents{
  width: 100%;
  height: calc(100vh - 140px);
  background: #ffffff;
}
.contact-box {
  width:60%;
  box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
  background-color: #ffffff;
  border-radius: 20px;
  padding: 30px;
  margin: 30px auto;
}
.contact-text{
  width: 80%;
  margin: 0 auto;
}
.tweet-box {
  padding-top: 40px;
  text-align: center;
}
.tweet-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-position: center center;
}
.tweet-text {
  padding-top: 40px;
  font-size: 20px;
}
</style>
