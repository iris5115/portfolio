<template>
  <div id="app">
    <header-menu></header-menu>
    <transition mode=”out-in”>
      <router-view />
    </transition>
    <footer-menu></footer-menu>
  </div>
</template>

<script>

import HeaderMenu from '@/components/HeaderMenu'
import FooterMenu from '@/components/FooterMenu'
import 'normalize.css'

export default {
  name: 'App',
  components: {
    HeaderMenu,
    FooterMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  margin: 0px;
  padding: 0px;
}

.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
