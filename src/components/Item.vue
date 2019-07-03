<template>
  <div class="item-box">
    <div class="item-img">
      <img :src="itemUrl" alt="img">
    </div>
    <div class="item-info">
      <span class="item-info-title">
        {{ itemTitle }}
      </span>
      <span class="item-info-desc">
        {{ itemDesc }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: ['itemTitle', 'itemDesc', 'itemUrl']
}
</script>

<style lang="scss">
.item {
  &-box {
    box-shadow: 0 0 1rem $shadow;
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    &:hover {
      transform: scale(1.05)
    }
  }
  &-img {
    margin: 0;
    padding: 0;
    background-color: $dark-blue;
    display: flex;
    align-items: center;
    & img {
      max-width: 100%;
    }
  }
  &-info {
    width: 100%;
    height: 10vh;
    background-color: $white;
    display:flex;
    flex-direction: column;
    align-items: baseline;
    &-title{
      padding: 1rem;
      font-size: 2rem;
      font-weight: 400;
    }
    &-desc{
      padding: 1rem;
      font-size: 1.4rem;
      font-weight: 300;
    }
  }
}

</style>
