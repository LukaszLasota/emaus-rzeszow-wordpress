import { defineStore } from 'pinia';
import {useFiltersStore} from "../filters";

export const useVivodeshipsFiltersStore = defineStore('vivodeships',{
    state: () => {},
    actions: {
        isChecked(key){
            const filtersStore = useFiltersStore();
            return filtersStore.vivodeships.includes(key);
        },
        async toggleFilter(vivodeship){
            const filtersStore = useFiltersStore();
            if(vivodeship.amount || filtersStore.vivodeships.includes(vivodeship.key)){
                const  index = filtersStore.vivodeships.indexOf(vivodeship.key);
                if (index === -1) {
                    filtersStore.vivodeships.push(vivodeship.key);
                } else {
                    filtersStore.vivodeships.splice(index, 1);
                }
                await filtersStore.applyFilter(1,true);
            }
        }
    }
});