<template>
  <div class="home">
    <catalog-component></catalog-component>
  </div>
</template>

<script>
// @ is an alias to /src

import CatalogComponent from '@/components/CatalogComponent.vue';

export default {
    name: "HomeView",
    components: { CatalogComponent }
}
</script>
