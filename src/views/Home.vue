<template>
  <div class="home">
    <CartBox />
    <div class="items-container">
      <router-link 
        v-for="item in getItems" 
        :key="item.id" 
        :to="{ 
          name: 'item', 
          params: {
            itemId: item.id
          } 
        }"
        tag="div" 
        class="item"
      >
        <item 
        :itemTitle="item.title" 
        :itemDesc="item.desc"
        :itemUrl = "item.url"
        ></item>
      </router-link>
    </div>
  </div>
</template>

<script>
import CartBox from '@/components/CartBox.vue'
import Item from '@/components/Item.vue'
import ItemLarge from '@/components/ItemLarge.vue'

export default {
  name: 'home',
  components: {
    CartBox,
    Item,
    ItemLarge
  },
  computed: {
    getItems() {
      return this.$store.state.items ? this.$store.state.items : []
    }
  },
  mounted() {
    this.$store.dispatch('fetchItems')
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.items-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: 6rem;
  width: 100%;
}
.item{
  flex: 0 1 5%;
  flex-basis: 12vw;
  margin-left: 6rem;
  margin-bottom: 6rem;
}
</style>