import { Asset } from 'expo';
import { decorate, observable, action } from 'mobx';
import { fromPromise } from 'mobx-utils';
import { images, getImage } from '../components/modules/Image/images';

class UiStore {
  constructor(store) {
    this.store = store;
  }

  // Observables
  initStatus;

  // Actions
  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  init = async () => {
    const initPromise = Promise.all([this.preload(), this.sleep(2000)]);
    this.initStatus = fromPromise(initPromise);

    await initPromise;
  };

  preload = async () => {
    await Object.keys(images).map(image =>
      Asset.fromModule(getImage(image)).downloadAsync()
    );
  };
}

decorate(UiStore, {
  initStatus: observable,
  init: action,
  preload: action,
});

export default UiStore;
