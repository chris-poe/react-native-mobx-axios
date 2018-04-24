import axios from 'axios';
import config from '../config';

export default () => {

	const client = axios.create(config.api);

	const getData = {
		data(params) {
			return client.request({
				method: 'get',
				url: params,
			})
		}
	};

	return {
		getData,
	}
};
