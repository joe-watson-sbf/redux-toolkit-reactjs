import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    isLoading: false,
    hasError: false,
    product: null,
    products: [],
    shoppingCart: []
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true
    },
    fetchAll: (state, action) => {
      state.isLoading = false
      state.hasError = false
      state.products = action.payload.products
    },
    fetchOne: (state, action) => {

      state.isLoading = false
      state.hasError = false
      state.product = action.payload.product
    },
    addToCart: (state, action) => {
      state.isLoading = false
      state.hasError = false
      state.shoppingCart.push(action.payload.product)
    }
  }
})

export const {
  startLoading,
  fetchAll,
  fetchOne,
  addToCart
} = productSlice.actions