import { createStore } from 'vuex';
import MainModule from '@/store/main-store';
import SubModule from '@/store/sub-store';

export default createStore({
  modules: {
    main: MainModule,
    sub: SubModule,
  }
})
