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
div{
    display: flex;
    flex-wrap: wrap;
    background-color: #2F2E2E;
    border: 3px solid #D10809;
    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    padding: 20px;
    margin: 20px;
}

</style>