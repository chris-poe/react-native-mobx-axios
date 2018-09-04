import Store from './Store';

export default config => {
  const store = new Store(config);

  if (__DEV__) {
    window.store = store;
  }

  return store;
};
