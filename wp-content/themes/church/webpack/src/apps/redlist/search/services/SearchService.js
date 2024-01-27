import { apiService } from "./ApiService";

export default {
	async getArticles(data){
		data.action = 'nopriv_getArticles';
		return await apiService('post',data);
	},
	async getResults(data){
		data.action = 'nopriv_getResults';
		return await apiService('post',data);
	},
};