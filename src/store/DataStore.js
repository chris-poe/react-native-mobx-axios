import { decorate, observable } from "mobx"

class DataStore {

	constructor(store) {
		this.store = store;
	}

	response = {};
}

decorate(DataStore, {
	response: observable,
})

export default DataStore;
