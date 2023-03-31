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
div {
    display: flex;
    flex-wrap: wrap;
    max-width: 1600px;
    margin: auto;
    background-color: #2F2E2E;
    border-radius: 5px;
    padding: 20px;
}
</style>