<template>
  <div class="mt-7 w-full flex flex-wrap justify-around gap-5 md:gap-8 lg:gap-5">
    <ul>
      <li v-for="movie in Movies" :key="movie.imdbID">
        <div>
          <p>{{ movie.Title }}</p>
          <img :src="movie.Poster" :alt="movie.imdbID"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import load from '../../load'

export default {
  name: "Movies",
  mounted() {
    load.load();
  },
  computed: {
    Movies() {
      return load.data.movies
    }
  }
}
</script>

<style scoped>
ul li {
  list-style: none;
}
</style>


