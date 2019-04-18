<template>
  <div class="pokemons">
    <h1 class="bg-marine text-white">Pokemons</h1>
    <div v-if="loading">Loading...</div>
    <div class="pokemon-lists-wrapper" v-else>
      <div class="pokemon-lists" v-for="(item, index) in pokemons" :key="index">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  mounted() {
    this.$store.dispatch('fetchPokemons')
  },
  computed: {
    ...mapGetters({
      pokemons: 'pokemons',
      loading: 'loadingPokemons'
    })
  }
}
</script>

<style scoped>
  .pokemon-lists-wrapper {
    width: 200px;
    margin: 0 auto;
  }
  .pokemon-lists {
    text-align: left;
    line-height: 50px;
  }
</style>