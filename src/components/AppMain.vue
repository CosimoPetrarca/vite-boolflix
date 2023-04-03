<script>
import FilmsCard from './FilmsCard.vue';
import SeriesCard from './SeriesCard.vue';
export default {
    name: 'Main',
    components: {
        FilmsCard,
        SeriesCard
    }
}
</script>


<template>
    <div>
        <FilmsCard />
        <SeriesCard />
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_partial/variables' as *;

div {
    display: flex;
    flex-wrap: wrap;
    max-width: 1600px;
    margin: auto;
    background-color: $primary;
    border-radius: 5px;
    padding: 20px;
}
</style>