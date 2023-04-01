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
            <img src="../../pubblic/logo.png" alt="">
            <!-- input di ricerca -->
            <form @submit.prevent="$emit('search-name')">
                <input type="text" placeholder="Cerca un film o una serie tv" v-model="store.searchText">
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
    padding-bottom: 30px;
    text-align: center;

    form{
        text-align: center;

        input{
            width: 30%;
            padding: 10px;
            border-radius: 20px;
            border: none;
            margin-right: 10px;
        }

        input:focus{
            outline: 2px solid #D10809;
        }

        button{
            background-color: white;
            padding: 10px;
            border-radius: 20px;
            border: none;
            margin-right: 10px;
        }

        button:hover{
            background-color: #D10809;
        }
    }


}
</style>