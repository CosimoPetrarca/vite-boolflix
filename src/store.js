import { reactive } from 'vue';

export const store = reactive({
    searchText: '',
    movies: [],
    series: [],
    parameters: {
        url_series: 'https://api.themoviedb.org/3/search/tv',
        url_movies: 'https://api.themoviedb.org/3/search/movie',
        apiKey: '2b6abe858a8e1b94f78042a417a3c130',
        url_img: 'https://image.tmdb.org/t/p/w342/'
    }
});