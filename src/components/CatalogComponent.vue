<template>
    <div class="catalog container">
        <div class="catalog__tools">
            <catalog-tools @update-list="filter"></catalog-tools>

        </div>
        <div class="catalog__items">
            <catalog-item v-for="product in products" :key="product.id" :id="product.id" :category="product.category"
                :name="product.name" :article="product.article" :img="product.img" :price="product.price">
            </catalog-item>
        </div>
        <div class="catalog--empty" v-if="!products.length">
            Ничегошеньки :(
        </div>
    </div>
</template>

<script>
import CatalogItem from '@/components/CatalogItem.vue'
import CatalogTools from '@/components/CatalogTools.vue'

export default {
    name: 'CatalogComponent',
    components: {
        CatalogItem, CatalogTools
    },
    data() {
        return {
            products: [],
            categories: []
        }
    },
    mounted() {
        this.getProductsList()
    },
    methods: {

        getProductsList() {
            return this.products = [...this.$store.getters.PRODUCTS]
        },
        filter(categories, price) {
            return this.products = this.$store.getters.FILTERED(categories, price.min, price.max)
        },
    }

}
</script>

<style lang="scss" scoped>
.catalog {
    &--empty {
        width: 100%;
        font-weight: 500;
        text-align: center;
    }

    &__tools {}

    &__items {
        display: flex;
        flex-wrap: wrap;
        gap: 35px;
    }
}
</style>