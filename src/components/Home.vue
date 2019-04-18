<template>
  <div class="hello">
    <div class="counter">
      <!-- <button @click.prevent="decrement">-</button>
      <h3>{{ counter }}</h3>
      <button @click.prevent="increment">+</button> -->
    </div>

    <div v-if="isShowProduct">
      <div>{{ product.brand }}</div>
      <button @click.prevent="showProducts">Kembali</button>
    </div>
    <div v-else>
      <div class="brand" v-for="(item, index) in products" :key="index">
        <div style="cursor: pointer;" @click="getDetailProduct(item)">{{ item.brand }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  computed: {
    ...mapGetters({
      products: 'products',
      product: 'product',
      // counter: 'counter/counter',
      isShowProduct: 'isShowProduct'
    })
  },
  methods: {
    ...mapActions({
      // increment: 'counter/increment',
      // decrement: 'counter/decrement',
      getDetailProduct: 'getDetailProduct',
      showProducts: 'showProducts'
    })
  },
  mounted() {
    this.$store.dispatch('getProducts')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.brand {
  line-height: 40px;
}
.counter {
  display: flex;
  align-items: center;
  align-content:space-around;
  text-align: center;
  width: 200px;
  margin: 0 auto;
}
a {
  color: #42b983;
}
</style>
