import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from './api/stock';

interface Product {
    _id?: string;
    productId?: {
        category: string,
        createdAt: string,
        description: string,
        devise: string,
        image: { public_id: string, url: string }
        name: string,
        price: number,
        updatedAt: string,
        __v: number,
        _id: string
    };
    quantity?: number;
    size?: string;
}

interface ProductState {
    data: Product[];
    singleProd: Product,
    isLoading: boolean;
}

const initialState: ProductState = {
    data: [],
    singleProd: {},
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

export const updateProductStock = createAsyncThunk('stock/updateProduct', async (stock: {
    _id: string,
    productId: string,
    quantity: number,
    dateStock: string,
    size: string
}, { rejectWithValue }) => {
    try {
        const response = await api.updateProductStock(stock._id, stock);
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
        });
        builder.addCase(fetchProductsStock.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(fetchProduct.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.singleProd = action.payload;
        });
        builder.addCase(fetchProduct.rejected, (state, action) => {
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
            // console.log(action)
        });

        builder.addCase(deleteProduct.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter(
                (item) => item._id != action.meta.arg
            );
            // console.log(action.meta.arg)
        });
        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(updateProductStock.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(updateProductStock.fulfilled, (state, action) => {
            state.isLoading = false;
            const updateItem = action.payload;
            const index = state.data.findIndex(
                (item) => item._id === updateItem._id
            );
            if (index !== -1) {
                state.data[index] = updateItem;
            }
        });
        builder.addCase(updateProductStock.rejected, (state, action) => {
            state.isLoading = false;
        });
    }
});

export default productStockSlice.reducer;