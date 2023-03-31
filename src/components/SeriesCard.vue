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
                return `${store.parameters.url_img}${serie.poster_path}`;
            } else {
                return 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
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
                <h1>{{ serie.name }}</h1>
                <p>{{ serie.original_name }}</p>
                <p><country-flag :country='getLanguage(serie)' size='normal' /></p>
                <p><font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote(serie)" />
                    <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getVote(serie)" />
                </p>
            </div>
        </div>
    </div>

    <!-- /lista characters series -->
</template>

<style lang="scss" scoped>

.flip-card {
    background-color: transparent;
    width: 342px;
    height: 513px;
    margin-bottom: 50px;

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
}

.fa-star{
    color: #ffd700;
}
</style>