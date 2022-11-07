<template>
    <div class="catalog__item item">
        <img :src="require(`../assets/products/${img}`)" :alt="name" class="item__img">
        <div class="item__category">
            {{ category }}
        </div>
        <div class="item__name">
            {{ name }}
        </div>
        <div class="item__price">
            {{ price }}
        </div>
        <add-to-cart-button :productId="id"></add-to-cart-button>
    </div>
</template>

<script>
import AddToCartButton from './AddToCartButton.vue';
export default {
    name: 'CatalogItem',
    components: {
        AddToCartButton
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        article: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },

    }
}
</script>

<style lang="scss" scoped>
.item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 30%;

    &__name {}

    &__price {}
}
</style>