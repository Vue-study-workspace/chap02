// tagsオプションを持つミックスイン
const tagin = {
  tags: ['tag', 'strategy']
};

// コンポーネント側もtagsオプションを定義
const app = Vue.createApp({})
  .component('my-comp', {
    tags: ['component', 'sample'],
    template: `<div>{{ $options.tags }}</div>`,
    mixins: [tagin]
  });

// tagsオプションのマージルールを定義
app.config.optionMergeStrategies.tags = (toVal = [], fromVal = []) => {
  return fromVal.concat(toVal);
};

app.mount('#app');
