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
            return Math.ceil(movie.vote_average / 2);
        },
        /* richiamo locandina */
        getPoster(movie) {
            if (movie.poster_path) {
                return `${store.parameters.url_img}${movie.poster_path}`;
            } else {
                return 'src/assets/scss/img/noimage.jpg';
            }
        }
    }
}
</script>


<template>
    <!-- lista characters movies -->

    <div class="flip-card" v-for="movie in store.movies">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="getPoster(movie)" alt="Poster" />
            </div>
            <div class="flip-card-back">
                <p>Movie</p>
                <h1>{{ movie.title }}</h1>
                <p>{{ movie.original_title }}</p>
                <p><country-flag :country='getLanguage(movie)' size='normal' /></p>
                <p><font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote(movie)" />
                    <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getVote(movie)" />
                </p>
                <h3>{{ movie.overview }}</h3>

            </div>
        </div>
    </div>

    <!-- /lista characters movies -->
</template>

<style lang="scss" scoped>
.flip-card {
    background-color: transparent;
    width: 342px;
    height: 535px;
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
    background-color: #2F2E2E;
    color: black;
}

.flip-card-back {
    background-color: #2F2E2E;
    border: 1px solid #D10809;
    color: white;
    transform: rotateY(180deg);
    overflow-y: auto;
}

.fa-star{
    color: #ffd700;
}

h3{
    padding-top: 50px;
}
</style>