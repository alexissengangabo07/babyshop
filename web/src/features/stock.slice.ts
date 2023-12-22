import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '@/features/api/stock';

interface Product {
    _id: string;
    productId: {};
    quantity: number;
    size?: string;
}

interface ProductState {
    data: Product[];
    isLoading: boolean;
}

const initialState: ProductState = {
    data: [],
    isLoading: false
};

export const fetchProductsStock = createAsyncThunk('stock/fetchProducts', async (_, { rejectWithValue }) => {
    try {
        const response = await api.fetchProductsStock();
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const fetchProduct = createAsyncThunk('stock/fetchProduct', async (productId: string, { rejectWithValue }) => {
    try {
        const response = await api.fetchProductStock(productId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const createProduct = createAsyncThunk('stock/createProduct', async (newProduct: object, { rejectWithValue }) => {
    try {
        const response = await api.createProductStock(newProduct);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const updateProduct = createAsyncThunk('stock/updateProduct', async (productId: string, { rejectWithValue }) => {
    try {
        const response = await api.updateProductStock(productId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const deleteProduct = createAsyncThunk('products/deleteProducts', async (productId: string, { rejectWithValue }) => {
    try {
        const response = await api.deleteProductStock(productId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

const productStockSlice = createSlice({
    name: 'stock',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProductsStock.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchProductsStock.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            // console.log(state.users);
        });
        builder.addCase(fetchProductsStock.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(createProduct.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(createProduct.rejected, (state, action) => {
            state.isLoading = false;
            console.log(action)
        });

        builder.addCase(deleteProduct.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter(
                (item) => item._id != action.meta.arg
            );
            console.log(action.meta.arg)
        });
        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(updateProduct.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            const updateItem = action.payload;
            const index = state.data.findIndex(
                (item) => item._id === updateItem._id
            );
            if (index !== -1) {
                state.data[index] = updateItem;
            }
        });
        builder.addCase(updateProduct.rejected, (state, action) => {
            state.isLoading = false;
        });
    }
});

export default productStockSlice.reducer;