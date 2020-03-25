<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key=index>
        <router-link v-bind:to=item.path>
          {{ item.title }}
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',
  data () {
    return {
      items: [
        { title: 'Top', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Works', path: '/works' },
        { title: 'Contact', path: '/contact' }
      ]
    }
  }
}
</script>

<style scoped>

li:hover {
  opacity: 0.4;
}
a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: #000000;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bold;
  text-decoration: none;
  line-height: 50px;
  text-align: center;
}

div {
  background: #f3f3f3;
}

@media (max-width: 1000px)
{
  ol {
    margin-left: auto;
    width: 100%;
    display:flex;
    justify-content: space-around;
    padding: 0;
    list-style: none;
  }
  li {
    width: 20%;
    height: 50px;
    font-size: 15px;
    position: relative;
  }
}

@media (min-width: 1000px)
{
  ol {
    margin-left: auto;
    width: 60%;
    display:flex;
    justify-content: center;
    padding: 20px 0;
    list-style: none;
  }
  li {
    width: 20%;
    height: 50px;
    margin-left:10px;
    margin-right:10px;
    font-size: 25px;
    position: relative;
  }
}

</style>
