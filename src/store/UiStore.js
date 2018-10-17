import { Asset } from 'expo';
import { decorate, observable, action } from 'mobx';
import { fromPromise } from 'mobx-utils';
import { images, getImage } from '../components/common/Image/images';

export default class UiStore {
  constructor(store) {
    this.store = store;
    Asset.fromModule(getImage('landing')).downloadAsync();
  }

  // Observables
  initStatus;

  // Actions
  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  init = async () => {
    const initPromise = Promise.all([this.preloadImages(), this.sleep(2000)]);
    this.initStatus = fromPromise(initPromise);

    await initPromise;
  };

  preloadImages = async () => {
    await Object.keys(images).map(image =>
      Asset.fromModule(getImage(image)).downloadAsync()
    );
  };
}

decorate(UiStore, {
  initStatus: observable,
  init: action,
  preloadImages: action,
});
