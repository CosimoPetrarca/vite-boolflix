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
        }
    }
}
</script>


<template>
    <!-- lista characters movies -->
    <h2>Series</h2>
    
    <ul v-for="serie in store.series">
        <li><strong>{{ serie.name }}</strong></li>
        <li>{{ serie.original_name }}</li>
        <li><country-flag :country='getLanguage(serie)' size='small' /></li>
        <li>{{ serie.vote_average }}</li>
    </ul>

    <!-- /lista characters movies -->
</template>

<style lang="scss" scoped>
ul{
    background-color: cadetblue;
}
</style>