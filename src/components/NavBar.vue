<template>
  <div class="nav-bar">
    <h1 class="logo">
      <router-link :to="{ name: 'home' }" class="logo-main" tag="a" >LOGO</router-link>
    </h1>
    <div class="nav-main">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="search-icon">
      <img src="../assets/search-icon.png" alt="">
    </div>
  </div>
</template>

<style lang="scss">
.nav-bar {
  margin: 0;
  padding: 0;
  height: 12vh;
  overflow: hidden;
  background-color: $background;
  display: flex;
  border: 1px solid #a2a2a2;
  margin-bottom: 10vh;
}

.logo {
  flex: 1;
  margin: 0;
  font-size: 3rem;
  font-weight: 200;
  letter-spacing: 0.1rem;
  order: 0;
  align-self: center;
  margin-left: 6rem;
  color: $black;
  &-main {
    margin-left: 2rem;
    align-content: center;
    text-decoration: none;
    &:visited {
      color: $black;
    }
  }
}

.nav-main {
  flex: 1;
  order:1;
  display: flex;
  align-self: center;
  justify-content: flex-end;
  & a {
  display: block;
  text-align: center;
  padding: 1rem 1rem;
  text-decoration: none;
  text-transform: uppercase;
  float: right;
  font-size: 1.4rem;
  font-weight: 500;
  color: $black;
  margin-left: 2rem;
    &:active{
      color: $light-blue;
    }
    &:hover{
      color: $dark-blue;
    }
  }
}

.search-icon {
  height: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-left: 3rem;
  background-color: $search;
  order:2;
  margin-right: 6rem;
  display:flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 6rem;
    height: 6rem;
  }
}
</style>
