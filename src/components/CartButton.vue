<template>
    <button class="cart-button">
        {{ CART_TOTAL }}
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g>
                <path
                    d="M198.56,483.96c-31.47,0-56.99-25.49-56.99-56.99c0-31.47,25.52-56.99,56.99-56.99s56.99,25.52,56.99,56.99   C255.55,458.47,230.03,483.96,198.56,483.96z M398.02,483.96c-31.47,0-56.99-25.49-56.99-56.99c0-31.47,25.52-56.99,56.99-56.99   s56.99,25.52,56.99,56.99C455.01,458.47,429.49,483.96,398.02,483.96z M26.51,82.86C11.4,82.36-0.49,69.7,0.02,54.56   c0.45-14.44,12.05-26.05,26.49-26.52h32.81c25.71,0,47.92,17.86,53.51,42.94l35.7,160.76c5.59,25.07,27.83,42.91,53.51,42.91   h214.04l41.1-164.4H190.91c-15.14-0.7-26.82-13.52-26.13-28.63c0.64-14.16,11.97-25.49,26.13-26.13h266.27   C487.46,55.45,512,80,512,110.24c0,4.51-0.56,8.96-1.64,13.33l-41.1,164.34c-6.09,24.4-28.02,41.52-53.18,41.52H202.04   c-51.37,0.03-95.86-35.67-106.99-85.82L59.31,82.86H26.51z" />
            </g>
        </svg>
    </button>
</template>
<script>
export default {
    name: 'CartButton',
    mounted() {
        this.$store.dispatch('SET_CART_TOTAL')
    },
    computed: {
        CART_TOTAL() {
            return this.$store.getters.CART_TOTAL
        }
    },

}
</script>