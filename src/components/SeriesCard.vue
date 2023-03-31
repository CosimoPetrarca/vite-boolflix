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
        /* cambio lingua da en a gb */
        getLanguage(serie) {
            if (serie.original_language === 'en') {
                return 'gb';
            } else {
                return serie.original_language;
            }
        },
        /* arrotondamento in eccesso */
        getVote(serie) {
            return Math.floor(serie.vote_average / 2);
        },

        /* richiamo locandina */
        getPoster(serie) {
            if (serie.poster_path) {
                return `${store.parameters.url_img}${serie.poster_path}`;
            } else {
                return 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
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
        <li>Voto: <font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote(serie)" />
            <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getVote(serie)" />
        </li>
    </ul>

    <!-- /lista characters movies -->
</template>

<style lang="scss" scoped>
ul {
    background-color: cadetblue;
    padding: 20px;
}
</style>