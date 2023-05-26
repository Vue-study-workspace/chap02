<template>
  <div id="app">
    メイン：{{ mainUpdated }}<br>
    サブ：{{ subUpdated }}<br>
    <input type="button" value="更新" v-on:click="setUpdated">
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    // mainモジュールの時刻を取得
    mainUpdated() {
      return this.$store.state.main.updated;
    },
    // subモジュールの時刻を取得
    subUpdated() {
      return this.$store.state.sub.updated;
    },
  },
  methods: {
    // main/subモジュールの時刻(updated)を更新
    setUpdated() {
      this.$store.dispatch('globalAction');
      this.$store.commit('main/setUpdated');
      this.$store.commit('sub/setUpdated');
    }
  }
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
