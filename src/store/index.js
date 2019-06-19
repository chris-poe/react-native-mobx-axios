import Store from './Store';

export default config => {
  const store = new Store(config);
  return store;
};
