<template>
  <div class="about">
    <div class="about-box">
      <img src="../assets/about-icon-black.png" alt="contact-icon">
      <span class="header-primary">
        About
      </span>
      <span class="header-sub">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima reprehenderit necessitatibus laboriosam labore facilis deleniti eius consequuntur maxime sed delectus esse quae eligendi, modi ut?
      </span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.about{
  display:flex;
  justify-content: center;
  align-items: center;
  &-box{
    padding: 10vh 8vw;
    background-color: $white;
    display:flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 2rem $shadow;
    flex-basis: 30vw;
    & img {
      height: 8rem;
      width: 8rem;
      align-self: center;
      margin-bottom: 2rem;
    }
  }
}
.header-primary {
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 400;
  margin-top: 3vh;
  margin-bottom: 4vh;
  align-self: center;
  color: $dark-text;
}
.header-sub{
  font-size: 1.8rem;
  line-height: 2.5rem;
  color: $light-text;
}
</style>

