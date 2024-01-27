import { defineStore } from 'pinia';
import SearchService from "../services/SearchService";

export const useFiltersStore = defineStore('filters',{
    state: () => {
        return {
            filtered: false,
            loading: false,
            search_type: 'redlist',
            query: '',
            page: 1,
            results: [],
            noresults: false,
            nodata: false,
            vivodeships_list: [],
            threats_list: {},
            taxonomies_list: {},
            vivodeships: [],
            threats: [],
            taxonomies: [],
            current_items: [],
            current_threat_category: [{"id": 0}],
            current_threat_category_id: 0,
            current_taxonomy_category: [{"id": 0}],
            current_taxonomy_category_id: 0,
        };
    },
    actions: {
        setDefaults(){
            this.$reset();
        },
        async applyFilter(page = 1, clean = true){
            this.filtered = true;
            if(clean){
                this.loading = true;
            }
            this.page = page;
            await this.getResults(clean);
            this.page++;
            if(clean){
                this.loading = false;
            }
        },
        async getResults(clean = false){
            if(this.vivodeships.length <= 0 && Object.keys(this.threats).length <= 0 && Object.keys(this.taxonomies).length <= 0){
                this.filtered = false;
            }
            this.noresults = false;
            this.nodata = false;
            const data = {
                search_type: this.search_type,
                query: this.query,
                page:this.page,
                vivodeships: JSON.stringify(this.vivodeships),
                threats: JSON.stringify(this.threats),
                taxonomies: JSON.stringify(this.taxonomies),
            };
            return await SearchService.getResults(data).then(async (res)=>{
                const parsed = JSON.parse(await res.data);
                if(parsed.results.length > 0){
                    this.results = (clean) ? parsed.results : this.results.concat(parsed.results);
                    if(this.search_type == 'redlist'){
                        this.vivodeships_list = parsed.vivodeships;
                        if(Object.keys(this.threats_list).length > 0){
                            for (const key in this.threats_list) {
                                this.threats_list[key]['amount'] = parsed.threats[key]['amount'];
                            }
                        } else {
                            this.threats_list = parsed.threats;
                        }
                        this.taxonomies_list = parsed.taxonomies;
                        if(Object.keys(this.taxonomies_list).length > 0){
                            for (const key in this.taxonomies_list) {
                                this.taxonomies_list[key]['amount'] = parsed.taxonomies[key]['amount'];
                            }
                        } else {
                            this.taxonomies_list = parsed.taxonomies;
                        }
                    }
                    if(parsed.results.length < 10){
                        this.noresults = true;
                    }
                } else {
                    if(parsed.results.length == 0){
                        if(clean){
                            this.results = [];
                            this.nodata = true;
                        } else {
                            this.noresults = true;
                        }
                    } else {
                        this.noresults = true;
                    }
                }
            }).catch(error => {
                console.log(error);
                return error;
            });
        }
    }
});