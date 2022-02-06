import {reactive} from 'vue'

export default {
    data: reactive({
        movies: []
    }),
    async load() {
        const data = await fetch("./data/data.json");
        this.data.movies = await data.json();
    },
}