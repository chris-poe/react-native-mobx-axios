import { decorate, observable, action } from 'mobx';
import { fromPromise } from 'mobx-utils';

class UiStore {
  constructor(store) {
    this.store = store;
  }

  // Observables
  initStatus;

  // Actions
  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  init = async () => {
    const initPromise = Promise.all([this.sleep(3000)]);
    this.initStatus = fromPromise(initPromise);

    await initPromise;
  };
}

decorate(UiStore, {
  initStatus: observable,
  init: action,
});

export default UiStore;
