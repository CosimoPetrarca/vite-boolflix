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
            return Math.ceil(serie.vote_average / 2);
        },

        /* richiamo locandina */
        getPoster(serie) {
            if (serie.poster_path) {
                return `${store.parameters.url_img}${serie.poster_path}`; /* concatenato eventi */
            } else {
                return 'src/assets/scss/img/noimage.jpg';
            }
        }
    }
}
</script>


<template>
    <!-- lista characters series -->

    <div class="flip-card" v-for="serie in store.series">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="getPoster(serie)" alt="Poster" />
            </div>
            <div class="flip-card-back">
                <p>Series</p>
                <h1>{{ serie.name }}</h1>
                <p>{{ serie.original_name }}</p>
                <p><country-flag :country='getLanguage(serie)' size='normal' /></p>
                <p><font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote(serie)" />
                    <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getVote(serie)" />
                </p>
                <h3>{{ serie.overview }}</h3>
            </div>
        </div>
    </div>

    <!-- /lista characters series -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/_partial/variables' as *;

.flip-card {
    background-color: transparent;
    width: 342px;
    height: 513px;
    margin: 10px 20px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    background-color: $primary;
    color: black;
}

.flip-card-back {
    background-color: $primary;
    border: 1px solid $secondary;
    color: white;
    transform: rotateY(180deg);
    overflow-y: auto;
}

.fa-star{
    color: $stars;
}

h3{
    padding-top: 50px;
}
</style>