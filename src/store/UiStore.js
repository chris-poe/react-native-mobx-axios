import { Asset } from 'expo-asset';
import { observable, action } from 'mobx';
import { fromPromise } from 'mobx-utils';
import { images, getImage } from '../components/common/Image/images';

export default class UiStore {
  constructor(store) {
    this.store = store;
    Asset.fromModule(getImage('landing')).downloadAsync();
  }

  @observable
  initStatus;

  @action
  sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  @action
  init = async () => {
    const initPromise = Promise.all([this.preloadImages(), this.sleep(2000)]);
    this.initStatus = fromPromise(initPromise);

    await initPromise;
  };

  @action
  preloadImages = async () => {
    await Object.keys(images).map(image =>
      Asset.fromModule(getImage(image)).downloadAsync()
    );
  };
}
