import { decorate, observable, action } from 'mobx';
import { fromPromise } from 'mobx-utils';

class UiStore {
	constructor() {
		super();
		this.store = store;
	}
}

decorate(UiStore, {})

export default UiStore;
