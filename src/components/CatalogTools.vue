<template>
    <div class="tools">
        <div class="filters">
            <div class="filters__categories categories">
                <div v-for="category in categories" :key="category" class="categories__category">
                    <input type="checkbox" ref="category" :aria-label="category" @click="selectCategories()">
                    <span>{{ category }}</span>
                </div>
            </div>

            <div class="filters__price price">
                <input type="number" :min="price.min" :max="price.max" v-model="price.min"
                    @input="filterBy(selectedCategories, price)" class="price__input">
                <input type="number" :min="price.min" :max="price.max" v-model="price.max"
                    @input="filterBy(selectedCategories, price)" class="price__input">
                <button @click="filterBy(selectedCategories, price)">применить</button>
            </div>
            <button @click="clearFilters()">Очистить</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CatalogTools',
    data() {
        return {
            categories: [],
            selectedCategories: [],
            price: {
                min: 0,
                max: 100500
            }
        }
    },
    mounted() {
        this.getCategoriesList()
    },
    methods: {
        getCategoriesList() {
            return this.categories = [...this.$store.getters.CATEGORIES]
        },
        filterBy(category, price) {
            this.$emit("update-list", category, price)
        },
        selectCategories() {
            const inputs = [...this.$refs.category.filter(el => { return el.checked === true })]

            inputs.forEach(el => this.selectedCategories.push(el.ariaLabel))

            this.filterBy(this.selectedCategories, this.price)
        },
        clearFilters() {
            this.$refs.category.forEach(el => el.checked = false)
            this.price.min = 0
            this.price.max = 100500
            this.filterBy(this.selectedCategories, this.price)
        }

    }

}
</script>

<style lang="scss" scoped>
.filters {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.categories {
    display: flex;
    gap: 15px;

    &__category {
        border-radius: 15px;
        position: relative;
        overflow: hidden;
        width: min(150px, 15%);
        height: 40px;

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            inset: 0;
            border-radius: 15px;
            border: 1px solid rgb(117, 117, 117);
            background: #cdcdcd;
        }

        input {
            opacity: 0;
            z-index: 1;
            position: absolute;
            inset: 0;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        input:checked~span {
            border: 1px solid #048354;
            background: #04AA6D;
        }
    }
}

.price {
    display: flex;
    gap: 20px;
}
</style>
