import { decorate } from 'mobx';

export default class AuthStore {
  constructor(store) {
    this.store = store;
  }
}

decorate(AuthStore, {});
