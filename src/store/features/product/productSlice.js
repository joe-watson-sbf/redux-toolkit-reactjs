import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    isLoading: false,
    hasError: false,
    product: null,
    products: [],
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
    fetchOne: (state, action)=>{
      
      state.isLoading = false
      state.hasError = false
      state.product = action.payload.product
    }
  },
})

export const {
  startLoading,
  fetchAll,
  fetchOne
} = productSlice.actions