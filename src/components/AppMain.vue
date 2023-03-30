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
    <FilmsCard />
    <SeriesCard />
</template>