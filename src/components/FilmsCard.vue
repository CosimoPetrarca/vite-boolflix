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
        /* cambio lingua da en a gb */
        getLanguage(movie) {
            if (movie.original_language === 'en') {
                return 'gb';
            } else {
                return movie.original_language;
            }
        },
        /* arrotondamento in eccesso */
        getVote(movie) {
            return Math.floor(movie.vote_average / 2);
        },
        /* richiamo locandina */
        getPoster(movie) {
            if (movie.poster_path) {
                return `${store.parameters.url_img}${movie.poster_path}`;
            } else {
                return 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
            }
        }
    }
}
</script>


<template>
    <!-- lista characters movies -->
    <h2>Films</h2>

    <ul v-for="movie in store.movies">
        <li>Titolo: <strong>{{ movie.title }}</strong></li>
        <li><img :src="getPoster(movie)" alt="Poster" /></li>
        <li>Titolo originale: {{ movie.original_title }}</li>
        <li>Lingua: <country-flag :country='getLanguage(movie)' size='small' /></li>
        <li>Voto: <font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote(movie)" />
            <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getVote(movie)" />
        </li>
    </ul>

    <!-- /lista characters movies -->
</template>

<style lang="scss" scoped>
ul {
    background-color: lightcoral;
    padding: 20px;
}
</style>