import { defineStore } from 'pinia';
import {useFiltersStore} from "../filters";

export const useThreatsFiltersStore = defineStore('threats',{
    state: () => {},
    actions: {
        isChecked(key){
            const filtersStore = useFiltersStore();
            return filtersStore.threats.includes(key);
        },
        async toggleFilter(threat){
            const filtersStore = useFiltersStore();
            if(threat.amount || filtersStore.threats.includes(threat.key)){
                const  index = filtersStore.threats.indexOf(threat.key);
                if (index === -1) {
                    filtersStore.threats.push(threat.key);
                } else {
                    filtersStore.threats.splice(index, 1);
                }
                await filtersStore.applyFilter(1,true);
            }
        }
    }
});