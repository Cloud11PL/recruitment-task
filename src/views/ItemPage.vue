<template>
  <div class="itemPage">
    <CartBox />
    <div class="item-container">
      <itemLarge :itemId="getIdParam"/>
    </div>
  </div>
</template>

<script>
import CartBox from '@/components/CartBox.vue'
import ItemLarge from '@/components/ItemLarge.vue'

export default {
  name: 'ItemPage',
  components: {
    CartBox,
    ItemLarge
  },
  computed: {
    getIdParam() {
      console.log(this.$route.params.itemId)
      return this.$route.params.itemId
    }
  }
}
</script>

<style>
.itemPage {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.item-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: 6rem;
  width: 100%;
}
</style>
