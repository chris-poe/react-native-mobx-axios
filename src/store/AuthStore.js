import { decorate } from 'mobx';

class AuthStore {
  constructor(store) {
    this.store = store;
  }
}

decorate(AuthStore, {});

export default AuthStore;
