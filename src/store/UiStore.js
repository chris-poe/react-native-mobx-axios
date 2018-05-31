import { decorate, observable, action } from 'mobx';
import { fromPromise } from 'mobx-utils';

class UiStore {
  constructor(store) {
    this.store = store;
  }
}

decorate(UiStore, {});

export default UiStore;
