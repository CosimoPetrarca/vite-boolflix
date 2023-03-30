<script>
import CountryFlag from 'vue-country-flag-next'
import { store } from '../store';
export default {
    name: 'Card',

    components: {
        CountryFlag
    },

    data() {
        return {
            store,
        }
    },
    eventoEmit: ["search-name"],

    methods: {
        getLanguage(movie) {
            if (movie.original_language === 'en') {
                return 'gb';
            } else {
                return movie.original_language;
            }
        },
        getVote(movie) {
            return movie.vote_average / 2;
        }
    }
}
</script>


<template>
    <!-- lista characters movies -->
    <h2>Films</h2>

    <ul v-for="movie in store.movies">
        <li>Titolo: <strong>{{ movie.title }}</strong></li>
        <li>Titolo originale: {{ movie.original_title }}</li>
        <li>Lingua: <country-flag :country='getLanguage(movie)' size='small' /></li>
        <li>Voto: {{ getVote(movie) }}</li>
    </ul>

    <!-- /lista characters movies -->
</template>

<style lang="scss" scoped>
ul {
    background-color: lightcoral;
    padding: 20px 0;
}
</style>