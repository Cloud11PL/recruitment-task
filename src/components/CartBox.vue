<template>
  <div class="cart-box">
    <div class="contact">
      <div class="contact-header">
        <img src="../assets/contact-icon.png" alt="contact icon">
        <span class="contact-heading">
          Contact
        </span>
      </div>
      <span class="contact-sub">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt magni earum quas saepe sit maxime.
      </span>
    </div>
    <div class="cart">
      <div class="cart-header">
        <img src="../assets/cart-icon.png" alt="cart icon">
        <span class="cart-heading">
          Cart
        </span>
      </div>
      <div class="cart-main">
        <span v-if="items.length === 0" class="cart-main-text">
          Cart is empty
        </span>
        <div v-else>
          <div v-for="(item, i) in items" :key="i + '_' + item.id" class="cart-item">
            <div class="cart-item-price">
              {{ item.price }}
            </div>
            <div class="cart-item-title">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
      <span class="total-price">
        Total price: {{ totalPrice }} $
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartBox',
  data () {
    return {
      cartItems: this.items,
      totalPrice: 0
    }
  },
  computed: {
    items() {
      let items = []
      if (this.$store.state.cart) {
        this.totalPrice = 0
        this.$store.state.cart.forEach(id => {
          let curItem = this.$store.getters.findById(id)
          this.totalPrice += curItem.price
          items.push(curItem)
        })
        return items
      }
    }
  }
}
</script>

<style lang="scss">
.cart-box {
  background-color: $light-blue;
  margin-left: 6rem;
  padding: 1rem;
  width: 20vw;
  color: $white;
  font-weight: 300;
  padding: 2rem 2rem;
}

.contact {
  display: flex;
  flex-direction: column;
  &-header {
    display: flex;
    font-size: 2rem;
    margin-bottom: 2vh;
    align-items: center;
  }
  & img {
    width: 3.5rem;
    margin-right: 1rem;
  }
  &-sub {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
}

.cart {
  display: flex;
  flex-direction: column;
  &-header {
    display: flex;
    font-size: 2rem;
    margin-top: 2vh;
    margin-bottom: 2vh;
    align-items: center;
  }
  & img {
    width: 3.5rem;
    margin-right: 1rem;
  }
  &-main {
    width: 100%;
    border-style: dashed;
    height: 18vh;
    display: flex;
    justify-content: start;
    flex-direction: column;
    font-size: 1.4rem;
    flex: 1;
    &-text {
      padding: 4rem 4rem;
      align-self: center;
    }
  }
  &-item{
    margin: 1rem 1rem;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: row;
    background-color: $dark-blue;
    transition: 0.2s;
    cursor: pointer;
    &-price {
      color: $accent;
      align-self: center;
      margin-right: 2rem;
    }
    &-title {
      color: $white;
      min-width: 0;
    }
    &:hover {
      transform: scale(1.05)
    }
  }
}

.total-price {
  font-size: 2rem;
  color: $accent;
  font-weight: 400;
  padding: 1rem;
}

</style>
