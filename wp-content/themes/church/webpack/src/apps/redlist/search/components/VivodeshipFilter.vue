<script setup>
import {ref,watch} from "vue";
import { useFiltersStore } from "../stores/filters";
import {useVivodeshipsFiltersStore} from "../stores/filters/vivodeships";

const isOpen = ref(false);
const filtersStore = useFiltersStore();
const vivodeshipsFiltersStore = useVivodeshipsFiltersStore();

watch(()=> filtersStore.search_type, ()=>{
  isOpen.value = false;
});

</script>
<template>
  <div class="redlist-search__filters-filter">
    <div class="redlist-search__filters-filter-heading" @click="isOpen = !isOpen">
      <div class="redlist-search__filters-filter-heading-text">Regiony występowania<div class="redlist-search__filters-filter-heading-text-amount" v-if="filtersStore.vivodeships.length > 0">{{ filtersStore.vivodeships.length }}</div></div>
      <div class="redlist-search__filters-filter-heading-accordeon" :class="{'redlist-search__filters-filter-heading-accordeon--opened': isOpen}"></div>
    </div>
    <div class="redlist-search__filters-filter-content" v-if="isOpen">
      <div class="redlist-search__filters-filter-item" :class="{'redlist-search__filters-filter-item--disabled' : !vivodeship.amount && !vivodeshipsFiltersStore.isChecked(vivodeship.key)}" v-for="vivodeship in filtersStore.vivodeships_list" @click="vivodeshipsFiltersStore.toggleFilter(vivodeship)">
        <div class="redlist-search__filters-filter-item-content">
          <div class="redlist-search__filters-filter-item-checkbox"
               :class="{'redlist-search__filters-filter-item-checkbox--disabled' : !vivodeship.amount && !vivodeshipsFiltersStore.isChecked(vivodeship.key), 'redlist-search__filters-filter-item-checkbox--checked' : vivodeshipsFiltersStore.isChecked(vivodeship.key)}"></div>
          <div>{{ vivodeship.name }} [{{ vivodeship.amount }}]</div>
        </div>
      </div>
    </div>
  </div>
</template>