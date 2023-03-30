
<script>
import { store } from '../store';

export default {
    name: 'Header',

    data() {
        return {
            store,
        }
    },

    eventoEmit: ["searchName"]
}
</script>

<template>
    <div class="container">
        <div>
            <h1>BoolFix</h1>
            <!-- input di ricerca -->
            <form @submit.prevent="$emit('searchName')">
                <input type="text" placeholder="Cerca un film" v-model="store.searchText">
                <button type="submit">Ricerca</button>
            </form>
            <!-- /input di ricerca -->
        </div>

        <!-- lista characters movies -->

        <ul v-for="movie in store.movies">
            <li><strong>{{ movie.title }}</strong></li>
            <li>{{ movie.original_title }}</li>
            <li>{{ movie.original_language }}</li>
            <li>{{ movie.vote_average }}</li>
        </ul>

        <!-- /lista characters movies -->
    </div>
</template>

<style lang="scss" scoped>
.container {
    max-width: 1200px;
    margin: auto;

    div {

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ul{
        padding: 15px 0;
    }


}
</style>