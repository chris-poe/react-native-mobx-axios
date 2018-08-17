import { Asset } from 'expo';
import { decorate, observable, action } from 'mobx';

import internalImages from '../components/modules/Image/internalImages';

class ImageStore {
  constructor(store) {
    this.store = store;
  }

  preload = async () => {
    await internalImages.map(image => Asset.fromModule(image).downloadAsync());
  };
}

decorate(ImageStore, {
  preload: action,
});

export default ImageStore;
