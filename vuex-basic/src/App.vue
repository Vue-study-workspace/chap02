<template>
  <div>
    <input type="button" value="-" v-on:click="minus">
    {{ count }}
    <input type="button" value="+" v-on:click="plus">
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'App',
  computed: {
    // 現在のカウント値を取得
    count() {
      return this.$store.state.count;
    }
  },
  methods: mapMutations(['plus', 'minus']),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
