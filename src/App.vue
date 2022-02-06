<template>
  <home/>
  <movies/>
</template>

<script>
import Home from "./components/Home";
import Movies from "./components/Movies";

export default {
  name: 'App',
  components: {
    Movies,
    Home
  }
}
</script>

<style>
</style>
