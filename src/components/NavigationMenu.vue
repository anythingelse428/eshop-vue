<template>
    <nav class="navigation">
        <div class="container">
            <div class="navigation__brand">
                <router-link class="navigation__link" to="/">Brand</router-link>
            </div>
            <div class="navigation__items">
                <router-link class="navigation__link" to="/cart">
                    Корзина
                    <cart-button></cart-button>
                </router-link>
                <router-link class="navigation__link" to="/profile">Профиль</router-link>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
.navigation {
    padding: 15px 0;
    border-bottom: 2px solid #c0c0c0;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    &__link {
        font-weight: 500;
        font-size: 16px;
        color: #000;
        text-decoration: none;
        transition: color .3s;

        &:visited {
            color: #000;
        }

        &:hover {
            color: #5c5b5bec;
        }

    }

    &__items {
        display: flex;
        gap: 20px;
    }
}
</style>
<script>
import CartButton from './CartButton.vue';

export default {
    name: "NavigationMenu",
    components: { CartButton }
}
</script>