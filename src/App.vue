<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain
  },

  data() {
    return {
      store
    }
  },

  /* richiamo l'api tramite axios */
  methods: {
    search() {
      axios.get(store.parameters.url_movies, {
        params: {
          api_key: store.parameters.apiKey,
          query: store.searchText
        }
      })
        .then((response) => {
          this.store.movies = response.data.results;
          console.log(this.store.movies);
        }),

        axios.get(store.parameters.url_series, {
        params: {
          api_key: store.parameters.apiKey,
          query: store.searchText
        }
      })
        .then((response) => {
          this.store.series = response.data.results;
          console.log(this.store.series);
        })
    }
  }

  
}
</script>

<template>
  <AppHeader @searchName="search"/>
  <AppMain />
</template>


<style lang="scss"></style>
