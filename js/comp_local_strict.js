const MyChild = {
  template: `<div>こんにちは、Comp2!</div>`
}

const MyParent = {
  components: {
    'my-child': MyChild, 
  },
  template: `
    <div>こんにちは、Comp1!</div>
    <my-child />
  `
};

Vue.createApp({
  components: {
    'my-parent': MyParent,
  }
}).mount('#app');