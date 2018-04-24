import createApi from '../services/api';
import DataStore from './DataStore';

class Store {
	constructor(config) {
		this.config = config;
		this.dataStore = new DataStore(this);
		this.api =  createApi({
			config: config.api
		});
	}
}

export default Store;
