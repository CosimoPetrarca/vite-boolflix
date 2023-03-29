
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
    <div>
        <h1>BoolFix</h1>
        <!-- input di ricerca -->
        <form @submit.prevent="$emit('searchName')">
            <input type="text" placeholder="Cerca un film" v-model="store.searchText">
            <button type="submit">Ricerca</button>
        </form>
        <!-- /input di ricerca -->

        <!-- lista characters movies -->
        <ul>
            <li v-for="movie in store.movies">
                <ul>
                    <li><strong>{{ movie.title }}</strong></li>
                    <li>{{ movie.original_title }}</li>
                    <li>{{ movie.original_language }}</li>
                    <li>{{ movie.vote_average }}</li>
                </ul>
            </li>
        </ul>
        <!-- /lista characters movies -->
    </div>
</template>

<style lang="scss" scoped></style>