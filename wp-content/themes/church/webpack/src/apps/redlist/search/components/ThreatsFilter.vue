<script setup>
import {ref,watch} from "vue";
import { useFiltersStore } from "../stores/filters";
import {useThreatsFiltersStore} from "../stores/filters/threats";

const isOpen = ref(false);
const filtersStore = useFiltersStore();
const threatsFiltersStore = useThreatsFiltersStore();

watch(()=> filtersStore.search_type, ()=>{
  isOpen.value = false;
});

</script>
<template>
  <div class="redlist-search__filters-filter">
    <div class="redlist-search__filters-filter-heading" @click="isOpen = !isOpen">
      <div class="redlist-search__filters-filter-heading-text">Kategorie zagrożenia w Polsce<div class="redlist-search__filters-filter-heading-text-amount" v-if="filtersStore.threats.length > 0">{{ filtersStore.threats.length }}</div></div>
      <div class="redlist-search__filters-filter-heading-accordeon" :class="{'redlist-search__filters-filter-heading-accordeon--opened': isOpen}"></div>
    </div>
    <div class="redlist-search__filters-filter-content" v-if="isOpen">
      <div class="redlist-search__filters-filter-item" :class="{'redlist-search__filters-filter-item--disabled' : !threat.amount && !threatsFiltersStore.isChecked(threat.key)}" v-for="threat in filtersStore.threats_list" @click="threatsFiltersStore.toggleFilter(threat)">
        <div class="redlist-search__filters-filter-item-content">
          <div class="redlist-search__filters-filter-item-checkbox"
               :class="{'redlist-search__filters-filter-item-checkbox--disabled' : !threat.amount && !threatsFiltersStore.isChecked(threat.key), 'redlist-search__filters-filter-item-checkbox--checked' : threatsFiltersStore.isChecked(threat.key)}"></div>
          <div>{{ threat.name }} [{{ threat.amount }}]</div>
        </div>
      </div>
    </div>
  </div>
</template>