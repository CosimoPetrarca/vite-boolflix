<script>
import CountryFlag from 'vue-country-flag-next'
import { store } from '../store';
export default {
    name: 'Series',

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
        getLanguage(serie) {
            if (serie.original_language === 'en') {
                return 'gb';
            } else {
                return serie.original_language;
            }
        },
        getVote(serie) {
            return Math.floor(serie.vote_average / 2);
        },

        getPoster(serie) {
            if (serie.poster_path) {
                return `${store.parameters.url_img}${serie.poster_path}`;
            } else {
                return '';
            }
        }
    }
}
</script>


<template>
    <!-- lista characters movies -->
    <h2>Series</h2>

    <ul v-for="serie in store.series">
        <li>Titolo: <strong>{{ serie.name }}</strong></li>
        <li><img :src="getPoster(serie)" alt="Poster" /></li>
        <li>Titolo originale: {{ serie.original_name }}</li>
        <li>Lingua: <country-flag :country='getLanguage(serie)' size='small' /></li>
        <li>Voto: {{ getVote(serie) }}</li>
    </ul>

    <!-- /lista characters movies -->
</template>

<style lang="scss" scoped>
ul{
    background-color: cadetblue;
    padding: 20px 0;
}
</style>