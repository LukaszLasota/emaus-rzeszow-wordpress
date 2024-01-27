import axios from 'axios';

let ajax_namespace = window['redlist'].ajax_url;
export async function apiService(reqType, data = null){
	const apiClient = axios.create({
		baseURL: ajax_namespace,
		withCredentials: false,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'multipart/form-data'
		}
	});
	function setParams(additionalParams){
		apiClient.interceptors.request.use(config => {
			config.params = {
				...additionalParams,
				...config.params,
			};
			return config;
		});
	}

	switch(reqType){
		case 'get':
			if(data){
				setParams(data);
			}
			return await apiClient.get('');

		case 'post':
			return await apiClient.post('',data);
		case 'delete':
			return await apiClient.delete('');
	}
}