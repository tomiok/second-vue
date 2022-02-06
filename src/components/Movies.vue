<template>
  <div class="mt-7 w-full flex flex-wrap justify-around gap-5 md:gap-8 lg:gap-5">
    <ul>
      <li v-for="movie in Movies" :key="movie.imdbID" class="item">
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
@import url('https://fonts.googleapis.com/css?family=Roboto');


@media (min-width: 1200px) {
  #app {
    padding-left: 80px;
    padding-right: 80px;
  }
}

ul li {
  list-style: none;
}

html { font-size: 22px; }
body { font-family: 'Roboto', sans-serif; }

a {
  color: #0094FF;
  text-decoration: none;
}

a:hover { color: #0074C6; }

.item {
  padding: 16px 24px;
  border-radius: 3px;
  background: #F5F5F5;
}

</style>


