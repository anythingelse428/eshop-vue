<template>
  <div class="app">
    <header>
      <navigation-menu></navigation-menu>
    </header>
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import NavigationMenu from './components/NavigationMenu.vue';

export default {
  name: 'App',
  components: {
    NavigationMenu,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;800&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

.container {
  padding: 0 15px;
  margin: 0 auto;
  width: calc(100% - 30px);

  @media screen and (max-width: 568px) {
    max-width: calc(100% - 10px);
    padding: 0 5px;
  }

  @media screen and (min-width: 768px) {
    max-width: 750px;
  }

  @media screen and (min-width: 992px) {
    max-width: 970px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1170px;
  }
}
</style>
