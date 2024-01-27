<script setup>
import {ref, watch} from "vue";
import { useFiltersStore } from "../stores/filters";
import TaxonomyFilterItem from "./TaxonomyFilterItem.vue";

const isOpen = ref(false);

const filtersStore = useFiltersStore();

function switchCategory(category){
  let list = filtersStore.current_taxonomy_category;
  let index = list.indexOf(category);
  list.splice(index, list.length);
  filtersStore.current_taxonomy_category_id = category.last_parent;
}

watch(()=> filtersStore.search_type, ()=>{
  isOpen.value = false;
})

</script>

<template>
  <div class="redlist-search__filters-filter">
    <div class="redlist-search__filters-filter-heading" @click="isOpen = !isOpen">
      <div class="redlist-search__filters-filter-heading-text">Przynależność taksonomiczna<div class="redlist-search__filters-filter-heading-text-amount" v-if="filtersStore.taxonomies.length > 0">{{ filtersStore.taxonomies.length }}</div></div>
      <div class="redlist-search__filters-filter-heading-accordeon" :class="{'redlist-search__filters-filter-heading-accordeon--opened': isOpen}"></div>
    </div>
    <div class="redlist-search__filters-filter-content" v-if="isOpen">
      <template v-for="category in filtersStore.current_taxonomy_category">
        <template v-if="category.id != 0">
          <div class="redlist-search__filters-filter-swap" @click="switchCategory(category)">&lt; <span v-html="category.name"></span> ({{ category.type }})</div>
        </template>
      </template>
      <TaxonomyFilterItem v-for="taxonomy in filtersStore.taxonomies_list" v-bind:item="taxonomy" v-bind:key="taxonomy.term_id" v-bind:parent="0"></TaxonomyFilterItem>
    </div>
  </div>
</template>