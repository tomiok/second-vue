<template class="home">
  <div class="home">
    <div class="menu">
      <div class="menu-item">
        <div class="menu-text">
          my list
        </div>
      </div>
      <div class="menu-item">
        <div class="menu-text">
          upcoming
        </div>
      </div>
      <div class="menu-item menu-center">
        PELIX
      </div>
      <div class="menu-item">
        <div class="menu-text">
          reviews
        </div>
      </div>
      <div class="menu-item">
        <div class="menu-text">
          about us
        </div>
      </div>
    </div>
    <div>
      <form>
        <label for="search"> {{ search }}: </label>
        <input id="search" type="search"/>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      search: "search movies or series"
    }
  }
}
</script>

<style scoped>

.home {
  background-color: rgba(217, 183, 110, 0.44);
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  height: 60px;
}

.menu-item {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-text {
  font-size: 20px;
  color: #818181;
  cursor: pointer;
  padding: 10px;
  border-bottom: 2px solid #080808;
  width: fit-content;
}

.menu-text:hover {
  border-bottom: 2px solid #c278ff;
}

.menu-center {
  font-size: 36px;
  color: #5d3b3b;
}
</style>