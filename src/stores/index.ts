import { defineStore } from 'pinia';
import { ref } from 'vue';

export const store = defineStore('store', {
  state: () => ({
    name: '扑街',
    count: 1,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
