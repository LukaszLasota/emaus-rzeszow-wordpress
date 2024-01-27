import { defineStore } from 'pinia';
import {useFiltersStore} from "../filters";

export const useTaxonomiesFiltersStore = defineStore('taxonomies',{
    state: () => {},
    actions: {
        isChecked(item){
            const filtersStore = useFiltersStore();
            if(filtersStore.taxonomies.includes(item.term_id)){
                return true;
            }
            if(filtersStore.taxonomies.includes(item.term_id) && item.children_array.length > 0 && item.children_array.every((r) => !(filtersStore.taxonomies.includes(r)))){
                return true;
            }
            if(!(filtersStore.taxonomies.includes(item.term_id)) && item.ancestors_array.length > 0 && item.ancestors_array.some((r) => filtersStore.taxonomies.includes(r))){
                return true;
            }
            return false;
        },
        isPartialyChecked(item) {
            const filtersStore = useFiltersStore();
            return (item.children_array.length > 0 && item.children_array.some((r) => filtersStore.taxonomies.includes(r)) &&
                !item.children_array.every((r) => filtersStore.taxonomies.includes(r)));
        },
        async toggleFilter(taxonomy){
            const filtersStore = useFiltersStore();
            if((taxonomy.amount > 0 || this.isChecked(taxonomy) || this.isPartialyChecked(taxonomy))){
                if(filtersStore.taxonomies.includes(taxonomy.term_id)){
                    this.removeTaxonomy(taxonomy.term_id);
                } else {
                    if(this.isPartialyChecked(taxonomy)){
                        if(filtersStore.taxonomies.includes(taxonomy.term_id)) {
                            this.removeTaxonomy(taxonomy.term_id);
                        }
                        taxonomy.children_array.forEach((r) => {
                            if(filtersStore.taxonomies.includes(r)){
                                this.removeTaxonomy(r);
                            }
                        });
                    }else {
                        if(!(filtersStore.taxonomies.includes(taxonomy.term_id)) && taxonomy.ancestors_array.some((r)=> filtersStore.taxonomies.includes(r))){
                            taxonomy.ancestors_array.forEach((r) => {
                                if(filtersStore.taxonomies.includes(r)){
                                    // if(!(filtersStore.taxonomies.includes(r)) && !filtersStore.current_items.some((v)=> filtersStore.taxonomies.includes(v))){
                                        filtersStore.current_items.forEach((s) => {
                                            if(s !== taxonomy){
                                                this.addTaxonomy(s.term_id);
                                                s.ancestors_array.forEach((a) => {
                                                    if(!taxonomy.ancestors_array.includes(a)){
                                                        if(!filtersStore.taxonomies.includes(a)){
                                                            this.addTaxonomy(a);
                                                        }
                                                    }
                                                })
                                            }
                                        });
                                    // }
                                    this.removeTaxonomy(r);
                                }
                            });

                            // if(taxonomy.siblings_array.length > 0){
                            //     taxonomy.siblings_array.forEach((r) => {
                            //         this.addTaxonomy(filtersStore.taxonomies_list[r].term_id);
                            //     });
                            // }
                        } else {
                            this.addTaxonomy(taxonomy.term_id);
                        }
                    }
                }

                await filtersStore.applyFilter(1,true);
            }
        },
        addTaxonomy(term_id){
            const filtersStore = useFiltersStore();
            filtersStore.taxonomies.push(term_id);
        },
        removeTaxonomy(term_id){
            const filtersStore = useFiltersStore();
            let index = filtersStore.taxonomies.indexOf(term_id);
            if (index > -1) {
                filtersStore.taxonomies.splice(index, 1);
            }
        }
    }
});