<script>
import { store } from '../store';

export default {
    name: 'Header',


    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="container">
        <div>
            <h1>BoolFix</h1>
            <!-- input di ricerca -->
            <form @submit.prevent="$emit('search-name')">
                <input type="text" placeholder="Cerca un film" v-model="store.searchText">
                <button type="submit">Ricerca</button>
            </form>
            <!-- /input di ricerca -->
        </div>
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
}
</style>