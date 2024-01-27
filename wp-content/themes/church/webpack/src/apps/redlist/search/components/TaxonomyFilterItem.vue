<script setup>
import {ref,watch} from "vue";
import { useFiltersStore } from "../stores/filters";
import {useTaxonomiesFiltersStore} from "../stores/filters/taxonomies";

const isOpen = ref(false);
const props = defineProps(["item","parent"]);
const filtersStore = useFiltersStore();
const taxonomiesFiltersStore = useTaxonomiesFiltersStore();

function openCategory(category){
  filtersStore.current_taxonomy_category.push(category);
  filtersStore.current_taxonomy_category_id = category.term_id;
  filtersStore.current_items = [];
}

watch(() => [filtersStore.current_taxonomy_category_id],()=>{
  if(filtersStore.current_taxonomy_category_id == props.item.last_parent){
    filtersStore.current_items.push(props.item);
  }
});
</script>

<template>
  <div class="redlist-search__filters-filter-item redlist-search__filters-filter-item--children" :class="{'redlist-search__filters-filter-item--disabled' : (!item.amount && !taxonomiesFiltersStore.isChecked(item) && !taxonomiesFiltersStore.isPartialyChecked(item)) }" v-if="'ancestors_array' in item && filtersStore.current_taxonomy_category_id == item.last_parent">
    <div class="redlist-search__filters-filter-item-name">
      <div class="redlist-search__filters-filter-item-content" @click="taxonomiesFiltersStore.toggleFilter(item)">
        <div class="redlist-search__filters-filter-item-checkbox"
             :class="{
               'redlist-search__filters-filter-item-checkbox--checked' : taxonomiesFiltersStore.isChecked(item),
              'redlist-search__filters-filter-item-checkbox--partialy-checked' : taxonomiesFiltersStore.isPartialyChecked(item),
             }"
        ></div>
        <div><span v-html="item.name"></span> ({{ item.type }}) [{{ item.amount }}]</div>
      </div>
      <div class="redlist-search__filters-filter-item-chevron" @click="openCategory(item)" v-if="Object.keys(item.children_array).length > 0">&gt;</div>
    </div>
  </div>
  <TaxonomyFilterItem v-for="taxonomy in item.children" v-bind:item="taxonomy" v-bind:key="taxonomy.term_id" v-bind:parent="item.term_id"></TaxonomyFilterItem>
</template>