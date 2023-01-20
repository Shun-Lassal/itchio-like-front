import { defineStore } from 'pinia';

export const useCoreStore = defineStore({
  id: 'coreStore',
  state: () =>({
    thomas: 'ThomasIs',
    shun: 'ShunIs',
    joris: 'JorisIs'
  }),
  actions:{
    changeShun() {
      this.shun = 'lolilol'
    }
  }
});
