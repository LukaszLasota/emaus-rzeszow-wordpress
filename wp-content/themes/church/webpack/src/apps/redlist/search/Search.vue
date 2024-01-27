<script setup>
import {ref, watch, onMounted} from 'vue';

import TaxonomyFilter from './components/TaxonomyFilter.vue';
import ThreatsFilter from './components/ThreatsFilter.vue';
import VivodeshipFilter from './components/VivodeshipFilter.vue';

import {useFiltersStore} from "./stores/filters";
import {useThreatsFiltersStore} from "./stores/filters/threats";
import {useTaxonomiesFiltersStore} from "./stores/filters/taxonomies";
import {useVivodeshipsFiltersStore} from "./stores/filters/vivodeships";

const props = defineProps(["data"]);
const filtersStore = useFiltersStore();
const threatsFiltersStore = useThreatsFiltersStore();
const taxonomiesFiltersStore = useTaxonomiesFiltersStore();
const vivodeshipsFiltersStore = useVivodeshipsFiltersStore();

const localLoading = ref(false);

const data = JSON.parse(props.data);

const manualQuery = ref(data.query);

filtersStore.vivodeships_list = data.vivodeships;
filtersStore.threats_list = data.threats;
filtersStore.taxonomies_list = data.taxonomies;
filtersStore.results = data.results;
filtersStore.query = data.query;
filtersStore.page = 2;

if(filtersStore.results.length == 0){
  filtersStore.nodata = true;
} else if(filtersStore.results.length < 10){
  filtersStore.noresults = true;
}

async function setSearchType(search_type){
  localLoading.value = false;
  filtersStore.page = 1;

  filtersStore.search_type = search_type;

  filtersStore.query = manualQuery.value;

  filtersStore.loading = true;
  await filtersStore.getResults(true);
  filtersStore.page++;
  filtersStore.loading = false;
}

async function loadMore(clean = false){
  localLoading.value = true;
  await filtersStore.applyFilter(filtersStore.page, clean);
  localLoading.value = false;
}

function toggleThreat(threat){
  threatsFiltersStore.toggleFilter(filtersStore.threats_list[threat]);
}

function toggleTaxonomy(taxonomy){
  taxonomiesFiltersStore.toggleFilter(filtersStore.taxonomies_list[taxonomy]);
}

function toggleVivodeship(vivodeship){
  vivodeshipsFiltersStore.toggleFilter(filtersStore.vivodeships_list[vivodeship]);
}

function updateQuery(clean = false){
  if(clean){
    manualQuery.value = '';
  }
  window.history.replaceState('', '', updateURLParameter(window.location.href, "q", manualQuery.value));
  filtersStore.query = manualQuery.value;
  filtersStore.page = 1;
  loadMore(true);
}

function resetFilters(){
  filtersStore.vivodeships_list = data.vivodeships;
  filtersStore.threats_list = data.threats;
  filtersStore.taxonomies_list = data.taxonomies;
  filtersStore.vivodeships = [];
  filtersStore.threats = [];
  filtersStore.taxonomies = [];
  setSearchType('redlist');
}

function updateURLParameter(url, param, paramVal){
  let newAdditionalURL = "";
  let tempArray = url.split("?");
  let baseURL = tempArray[0];
  let additionalURL = tempArray[1];
  let temp = "";
  if (additionalURL) {
    tempArray = additionalURL.split("&");
    for (let i=0; i<tempArray.length; i++){
      if(tempArray[i].split('=')[0] != param){
        newAdditionalURL += temp + tempArray[i];
        temp = "&";
      }
    }
  }

  let rows_txt = temp + "" + param + "=" + paramVal;
  return baseURL + "?" + newAdditionalURL + rows_txt;
}

</script>
<template>
    <div class="redlist-search-container">
        <div class="redlist-search__filters">
            <div class="redlist-search__filters-section">
              <div class="redlist-search__filters-section-heading">
                <div class="redlist-search__filters-section-heading-title">Wyszukiwanie</div>
              </div>
              <div class="redlist-search__filters-section-content">
                <div class="redlist-search__filters-section-content-text"><input class="redlist-search__filters-section-content-text-input" id="q-redlist" name="q" type="text" @keyup.enter="updateQuery()" v-model="manualQuery"><button class="redlist-search__filters-section-content-text-button" @click="updateQuery()">Szukaj</button></div>
              </div>
            </div>
            <div class="redlist-search__filters-section">
                <div class="redlist-search__filters-section-heading">
                  <div class="redlist-search__filters-section-heading-title">Typ</div>
                </div>
                <div class="redlist-search__filters-section-content">
                    <div class="redlist-search__filters-section-content-switch"><input id="type-redlist" value="redlist" name="type" type="radio" :checked="filtersStore.search_type == 'redlist'" @click="setSearchType('redlist')"><label for="type-redlist">Czerwona lista</label></div>
                    <div class="redlist-search__filters-section-content-switch"><input id="type-articles" value="articles" name="type" type="radio" :checked="filtersStore.search_type == 'articles'" @click="setSearchType('articles')"><label for="type-articles">Artykuły</label></div>
                </div>
            </div>
            <div class="redlist-search__filters-section" :class="{ 'redlist-search__filters-section--disabled' : filtersStore.search_type == 'articles' }">
                <div class="redlist-search__filters-section-heading">
                  <div class="redlist-search__filters-section-heading-title">Filtry</div>
                  <div class="redlist-search__filters-section-heading-button" v-if="filtersStore.filtered" @click="resetFilters()">Wyczyść</div>
                </div>
                <div class="redlist-search__filters-section-content">
                    <TaxonomyFilter/>
                    <ThreatsFilter/>
                    <VivodeshipFilter />
                </div>
            </div>
        </div>
        <div class="redlist-search__results">
          <template v-if="data && data.query == null && filtersStore.search_type == 'redlist'">
              Rozpocznij wyszukiwanie zaawansowane, wybierając opcje kryteriów.
          </template>
          <template v-else>
            <template v-if="filtersStore.loading">
              <div class="redlist-search__results-items redlist-search__results-items--grid">
                <div class="redlist-search__results-items-actions">
                  <div class="wp-block-button__link">Ładowanie</div>
                </div>
              </div>
            </template>
            <template v-else-if="data && filtersStore.search_type == 'redlist'">
              <div class="redlist-search__results-filtersdata">
                <div class="redlist-search__results-filtersdata-filter" v-if="filtersStore.query.length > 0">
                  <div class="redlist-search__results-filtersdata-filter-title">Nazwa</div>
                  <div class="redlist-search__results-filtersdata-filter-list">
                    <div class="redlist-search__results-filtersdata-filter-list-item">
                      <div class="redlist-search__results-filtersdata-filter-list-item-text">
                        <span v-html="filtersStore.query"></span>
                      </div>
                      <div class="redlist-search__results-filtersdata-filter-list-item-close" @click="updateQuery(true)">x</div>
                    </div>
                  </div>
                </div>
                <div class="redlist-search__results-filtersdata-filter" v-if="filtersStore.taxonomies.length > 0">
                  <div class="redlist-search__results-filtersdata-filter-title">Przynależność taksonomiczna</div>
                  <div class="redlist-search__results-filtersdata-filter-list">
                    <div class="redlist-search__results-filtersdata-filter-list-item" v-for="taxonomy in filtersStore.taxonomies" :key="taxonomy">
                      <div class="redlist-search__results-filtersdata-filter-list-item-text">
                        <span v-html="filtersStore.taxonomies_list[taxonomy].name"></span> ({{ filtersStore.taxonomies_list[taxonomy].type }})
                      </div>
                      <div class="redlist-search__results-filtersdata-filter-list-item-close" @click="toggleTaxonomy(taxonomy)">x</div>
                    </div>
                  </div>
                </div>
                <div class="redlist-search__results-filtersdata-filter" v-if="filtersStore.threats.length > 0">
                  <div class="redlist-search__results-filtersdata-filter-title">Kategorie zagrożenia w Polsce</div>
                  <div class="redlist-search__results-filtersdata-filter-list">
                    <div class="redlist-search__results-filtersdata-filter-list-item" v-for="threat in filtersStore.threats" :key="threat">
                      <div class="redlist-search__results-filtersdata-filter-list-item-text">
                        {{ filtersStore.threats_list[threat].name }}
                      </div>
                      <div class="redlist-search__results-filtersdata-filter-list-item-close" @click="toggleThreat(threat)">x</div>
                    </div>
                  </div>
                </div>
                <div class="redlist-search__results-filtersdata-filter" v-if="filtersStore.vivodeships.length > 0">
                  <div class="redlist-search__results-filtersdata-filter-title">Regiony występowania</div>
                  <div class="redlist-search__results-filtersdata-filter-list">
                    <div class="redlist-search__results-filtersdata-filter-list-item" v-for="vivodeship in filtersStore.vivodeships" :key="vivodeship">
                      <div class="redlist-search__results-filtersdata-filter-list-item-text">
                        {{ filtersStore.vivodeships_list[vivodeship].name }}
                      </div>
                      <div class="redlist-search__results-filtersdata-filter-list-item-close" @click="toggleVivodeship(vivodeship)">x</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="redlist-search__results-items redlist-search__results-items--grid">
                <a v-for="(post, key) in filtersStore.results" :key="key" class="redlist-search__results-items-item" :href="post.url">
                  <div class="redlist-search__results-items-item-thumb" :style="'background-image: url(' + post.thumbnail +')'"></div>
                  <div class="redlist-search__results-items-item-desc" v-if="post.sci_italic">
                    <div class="redlist-search__results-items-item-desc-threat" v-if="post.category" :style="'background-image: url(' + data.media_url + '/category-sm_' + post.category +'.svg)'"></div>
                    <p class="redlist-search__results-items-item-desc-kingdom" v-if="post.kingdom">{{ post.kingdom }}</p>
                    <h1 class="redlist-search__results-items-item-desc-name" v-if="post.polish_name">{{ post.polish_name }}</h1>
                    <h1 class="redlist-search__results-items-item-desc-name" v-if="post.sci_name"><em>{{ post.sci_name }}</em></h1>
                  </div>
                  <div class="redlist-search__results-items-item-desc" v-else>
                    <p class="redlist-search__results-items-item-desc-kingdom" v-if="post.kingdom">{{ post.kingdom }}</p>
                    <h1 class="redlist-search__results-items-item-desc-name" v-if="post.polish_name">{{ post.polish_name }}</h1>
                    <h1 class="redlist-search__results-items-item-desc-name" v-if="post.sci_name">{{ post.sci_name }}</h1>
                  </div>
                </a>
                <div class="redlist-search__results-items-actions">
                  <div class="wp-block-button__link" v-if="filtersStore.loading || localLoading">Ładowanie</div>
                  <button class="wp-block-button__link" @click="loadMore()" v-if="!filtersStore.loading && !localLoading && !filtersStore.noresults && !filtersStore.nodata">Załaduj wiecej</button>
                  <div v-if="filtersStore.noresults && !filtersStore.nodata">Załadowano wszystkie wyniki</div>
                  <div v-if="filtersStore.nodata">Brak wyników</div>
                </div>
              </div>
            </template>
            <template v-else-if="data && filtersStore.search_type == 'articles'">
              <div class="redlist-search__results-items redlist-search__results-items--list">
                <div v-for="(post, key) in filtersStore.results" :key="key" class="redlist-search__results-items-item">
                  <div class="redlist-search__results-items-item-thumb">
                    <img :src="post.thumbnail" :alt="post.title">
                  </div>
                  <div class="redlist-search__results-items-item-content">
                    <a :href="post.url"><h1 v-html="post.title"></h1></a>
                    <time :datetime="post.date" class="redlist-search__results-items-item-date date">{{ post.dateformatted }}</time>
                    <p class="redlist-search__results-items-item-excerpt post-desc" v-html="post.excerpt"></p>
                    <div class="btn--secondary"><a class="redlist-search__results-items-item-readmore" :href="post.url">Czytaj więcej</a></div>
                  </div>
                </div>
                <div class="redlist-search__results-items-actions">
                  <div class="wp-block-button__link" v-if="filtersStore.loading || localLoading">Ładowanie</div>
                  <button class="wp-block-button__link" @click="loadMore()" v-if="!filtersStore.loading && !localLoading && !filtersStore.noresults && !filtersStore.nodata">Załaduj wiecej</button>
                  <div v-if="filtersStore.noresults && !filtersStore.nodata">Załadowano wszystkie wyniki</div>
                  <div v-if="filtersStore.nodata">Brak wyników</div>
                </div>
              </div>
            </template>
          </template>
        </div>
    </div>
</template>