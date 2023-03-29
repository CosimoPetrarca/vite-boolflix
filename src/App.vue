<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
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
        })
    }
  }
}
</script>

<template>
  <AppHeader @searchName="search"/>
</template>


<style lang="scss"></style>
