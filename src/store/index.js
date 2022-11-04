
import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        id: 0,
        name: 'product0',
        price: 100,
        category: 'category1',
        article: 'product0 article',
        img: 'product0.png',
      },
      {
        id: 1,
        name: 'product1',
        price: 10,
        category: 'category1',
        article: 'product1 article',
        img: 'product0.png',
      },
      {
        id: 2,
        name: 'product2',
        price: 700,
        category: 'category1',
        article: 'product2 article',
        img: 'product0.png',
      },
      {
        id: 3,
        name: 'product3',
        price: 20,
        category: 'category2',
        article: 'product2 article',
        img: 'product0.png',
      },
      {
        id: 4,
        name: 'product4',
        price: 180,
        category: 'category1',
        article: 'product2 article',
        img: 'product0.png',
      },
      {
        id: 5,
        name: 'product5',
        price: 11,
        category: 'category3',
        article: 'product2 article',
        img: 'product0.png',
      },
    ],
    productsCategories: ['category1', 'category2', 'category3', 'category4'],
  },
  getters: {
    PRODUCTS: state => {
      return state.products
    },
    CATEGORIES: state => {
      return state.productsCategories
    },
    FILTERED: state => (category, min, max) => {
      if (category.length) {
        return state.products.filter(item => item['price'] >= min && item['price'] <= max && category.includes(item['category']));
      } else {
        return state.products.filter(item => item['price'] >= min && item['price'] <= max);
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
