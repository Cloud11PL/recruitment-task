<template>
  <div class="about">
    <div class="about-box">
      <img src="../assets/about-icon-black.png" alt="contact-icon">
      <span class="header-primary">
        Contact
      </span>
      <div class="header-sub">
        <span class="header-sub-email">
          divante@divante.pl
        </span>
        <span class="header-sub-phone">
          tel. 123 - 456 - 789
          <br>
          tel. 887 - 236 - 324
        </span>
        <span class="header-sub-address">
          ul. Dmowskiego 17
          <br>
          00 - 000 Wroclaw
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact'
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
  text-align: center;
  &-phone {
    margin-top: 1.4rem;
    margin-bottom: 1.4rem;
  }
}
</style>