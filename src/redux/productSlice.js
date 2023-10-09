import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../utils/status";

const initialState = {
     products: [],
     productsStatus: STATUS.IDLE,
     productSingle: [],
     productSingleStatus: STATUS.IDLE,
};

const productSlice = createSlice({
     name: "product",
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          builder
               .addCase(fetchAsyncProducts.pending, (state, action) => {
                    state.productsStatus = STATUS.LOADING;
               })

               .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
                    state.products = action.payload;
                    state.productsStatus = STATUS.SUCCEEDED;
               })

               .addCase(fetchAsyncProducts.rejected, (state, action) => {
                    state.productsStatus = STATUS.FAILED;
               })

               .addCase(fetchAsyncProductSingle.pending, (state, action) => {
                    state.productSingleStatus = STATUS.LOADING;
               })

               .addCase(fetchAsyncProductSingle.fulfilled, (state, action) => {
                    state.productSingle = action.payload;
                    state.productSingleStatus = STATUS.SUCCEEDED;
               })

               .addCase(fetchAsyncProductSingle.rejected, (state, action) => {
                    state.productSingleStatus = STATUS.FAILED;
               });
     },
});

export const fetchAsyncProducts = createAsyncThunk(
     "/products/fetch",
     async (limit) => {
          const res = await axios.get(`/products?limit=${limit}`);
          return res.data.products;
     }
);

export const fetchAsyncProductSingle = createAsyncThunk(
     "/products-single/fetch",
     async (id) => {
          const res = await axios.get(`/products/${id}`);
          return res.data;
     }
);

export const getAllProducts = (state) => state.product.products;
export const getAllProductsStatus = (state) => state.product.productsStatus;
export const getProductSingle = (state) => state.product.productSingle;
export const getSingleProductStatus = (state) =>
     state.product.productSingleStatus;
export default productSlice.reducer;
