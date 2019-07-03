<template>
  <div id="app">
    <navBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  components: {
    NavBar
  }
}
</script>


<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%; //1rem = 10px, 10px/16px = 62.5%
  background-color: $background;
}
</style>
