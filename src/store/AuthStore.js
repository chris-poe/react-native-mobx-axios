import { observable, computed, action } from 'mobx';
import { fromPromise } from 'mobx-utils';

export default class AuthStore {
  constructor(store) {
    this.store = store;
  }

  @observable
  token;

  @observable
  sessionStatus;

  @computed
  get isLoggedIn() {
    return Boolean(this.token);
  }

  @action
  setToken = token => {
    this.token = token;
  };

  @action
  logIn = async ({ login, password }) => {
    const sessionPromise = this.store.api.auth.logIn({ login, password });
    this.sessionStatus = fromPromise(sessionPromise);

    const { token } = await sessionPromise;
    // Handle Auth
  };
}
