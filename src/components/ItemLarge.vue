<template>
  <div class="item-large">
    <div class="item-large-img">
      <img :src="getItemInfo.url" alt="item-img" >
    </div>
    <div class="bottom-container">
      <div class="item-large-info">
        <span class="item-large-info-title">
          {{ getItemInfo.title }}
        </span>
        <span class="item-large-info-desc">
          {{ getItemInfo.desc }}
        </span>
        <span class="item-large-info-price">
          Price: {{ getItemInfo.price }} $
        </span>
      </div>
      <div class="button-box">
        <button class="btn" @click="addToCart">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemLarge',
  props: ['itemId'],
  methods: {
    addToCart() {
      console.log(this.itemId)
      this.$store.commit('ADD_TO_CART', this.itemId)
    }
  },
  computed: {
    getItemInfo() {
      return this.$store.getters.findById(this.itemId) ? this.$store.getters.findById(this.itemId) : {}
    }
  }
}
</script>

<style lang="scss">
.item-large {
  flex: 1;
  margin-left: 6rem;
  flex-basis: 100%;
  box-shadow: 0 0 1rem $shadow;
  transition: 0.3s;
  margin-bottom: 10vh;
  &-img {
    margin: 0;
    padding: 0;
    background-color: $dark-blue;
    width: 100%;
    height: $large-image-height;
    display: flex;
    justify-content: center;
    & img {
      max-height: $large-image-height;
    }
  }
  &-info {
    flex: 2;
    display:flex;
    flex-direction: column;
    align-items: baseline;
    color: $white;
    &-title{
      padding: 5vh 4vw;
      font-size: 2rem;
      font-weight: 400;
    }
    &-desc{
      padding: 2vh 4vw;
      font-size: 1.4rem;
      font-weight: 300;
    }
    &-price {
      padding: 2vh 4vw;
      font-size: 1.4rem;
      font-weight: 400;
    }
  }
}
.bottom-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30vh;
  background-color: $light-blue;
}
.button-box {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  & button {
    padding: 2vh 5vw;
    background-color: $accent;
    color: $white;
    font-size: 2rem;
    font-weight: 400;
    border: none;
    outline: none;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.95);
    }
  }
}

</style>
