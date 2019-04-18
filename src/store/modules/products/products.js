import { fetchProducts } from '@/api';

const state = {
  products: [],
  isShowProduct: null,
  product: {},
};

const actions = {
  getProducts: (context) => {
    fetchProducts
      .then((response) => {
        context.commit('PRODUCTS_UPDATED', response);
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error);
      });
  },

  getDetailProduct(context, payload) {
    context.commit('IS_SHOW_PRODUCT', true)
    context.commit('SET_DETAIL_PRODUCT', payload)
  },

  showProducts(context) {
    context.commit('IS_SHOW_PRODUCT', false)
    context.dispatch('getProducts')
  }
};

const mutations = {
  PRODUCTS_UPDATED: (state, products) => {
    state.products = products;
  },
  IS_SHOW_PRODUCT: (state, status) => {
    state.isShowProduct = status
  },
  SET_DETAIL_PRODUCT: (state, product) => {
    state.product = product
  }
};

const getters = {
  products: state => state.products,
  product: state => state.product,
  isShowProduct: state => state.isShowProduct,
};

export default {
  state,
  getters,
  actions,
  mutations,
};