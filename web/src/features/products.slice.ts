import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '@/features/api/products';

interface Product {
    _id: string;
    name: string,
    price: number,
    description?: string,
    image: {},
    categoryId: {}
}

interface ProductState {
    data: Product[];
    isLoading: boolean;
}

const initialState: ProductState = {
    data: [],
    isLoading: false
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue }) => {
    try {
        const response = await api.fetchProducts();
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const fetchProduct = createAsyncThunk('products/fetchProduct', async (productId: string, { rejectWithValue }) => {
    try {
        const response = await api.fetchProduct(productId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const createProduct = createAsyncThunk('products/createProduct', async (newProduct: object, { rejectWithValue }) => {
    try {
        const response = await api.createProduct(newProduct);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const updateProduct = createAsyncThunk('products/updateProduct', async (productId: string, { rejectWithValue }) => {
    try {
        const response = await api.updateProduct(productId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const deleteProduct = createAsyncThunk('products/deleteProducts', async (productId: string, { rejectWithValue }) => {
    try {
        const response = await api.deleteProduct(productId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            // console.log(state.users);
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
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
        });

        builder.addCase(deleteProduct.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter(
                (item) => item._id != action.payload
            );
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

export default productSlice.reducer;