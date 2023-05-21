const useCounter = function(init) {
  const current = Vue.ref(init);
  const onclick = () => {
    current.value++;
  };
  // データオブジェクト(ref変数)とカウンター変数(メソッド)を束ねる
  return {
    current,
    onclick,
  };
};
