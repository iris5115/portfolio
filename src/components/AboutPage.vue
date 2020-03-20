<template>
<div class="contents">
  <div class="left-contents">
    <div class="profile">
      <div class="left-profile">
        <img class="img" src="../assets/logo.png"/>
      </div>
      <div class="right-profile">
        <h1>Profile</h1>
        <p1>初めまして。２６歳のエンジニアです。</p1>
      </div>
    </div>
    <div class="skill">
      <h1>Skill</h1>
      <div class="skill-box" v-for="(item, index) in items" :key=index>
        <h2> {{ item.title }} </h2>
        <p2> {{ item.text }} </p2>
      </div>
    </div>
  </div>
  <div class="right-contents">
    <div class="history">
      <h1>History</h1>
      <div class="history-box" v-for="(list, index) in lists" :key=index>
        <h3> {{ list.title }} </h3>
        <p3> {{ list.text }} </p3>
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
        { title: 'Ruby on Rails', text: 'あああああ' },
        { title: 'HTML&CSS', text: 'いいいいい' },
        { title: 'JQuery', text: 'ううううう' },
        { title: 'Javasqript', text: 'えええええ' },
        { title: 'Github', text: 'おおおおお' },
        { title: 'AWS', text: 'カカかかか' }
        ],
      lists: [
        { title: '2020年', text: 'aaaaa' },
        { title: '2019年', text: 'bbbbb' },
        { title: '2018年', text: 'ccccc' },
        { title: '2017年', text: 'dddddd' },
        { title: '2016年', text: 'eeeeeeee' },
        { title: '2015年', text: 'ffffffff' },
      ]
    }
  },
}

</script>

<style scoped>
.contents{
  width: 100%;
  height: 1500px;
  background-color: burlywood;
  display: flex;
}
.left-contents{
  width: 55%;
  height: 100%;
  background: chartreuse;
}
.profile{
  width: 90%;
  height: 500px;
  background-color: coral;
}
.skill{
  width: 90%;
  height: 500px;
  background-color: yellow;
}
.right-contents
{
width: 45%;
height: 100%;
background: red;
}

</style>
