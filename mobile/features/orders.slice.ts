import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from './api/orders';

interface Order {
    _id: string;
    userId: {},
    productsId: object[],
    total: number
}

interface OrderState {
    data: Order[];
    isLoading: boolean;
}

const initialState: OrderState = {
    data: [],
    isLoading: false
};

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async (_, { rejectWithValue }) => {
    try {
        const response = await api.fetchOrders();
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const fetchOrder = createAsyncThunk('orders/fetchOrder', async (orderId: string, { rejectWithValue }) => {
    try {
        const response = await api.fetchOrder(orderId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const createOrder = createAsyncThunk('orders/createOrder', async (newOrder: object, { rejectWithValue }) => {
    try {
        const response = await api.createOrder(newOrder);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const updateOrder = createAsyncThunk('orders/updateOrder', async (orderId: string, { rejectWithValue }) => {
    try {
        const response = await api.updateOrder(orderId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const deleteOrder = createAsyncThunk('orders/deleteOrders', async (orderId: string, { rejectWithValue }) => {
    try {
        const response = await api.deleteOrder(orderId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchOrders.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            // console.log(state.users);
        });
        builder.addCase(fetchOrders.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(createOrder.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(createOrder.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(createOrder.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(deleteOrder.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(deleteOrder.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter(
                (item) => item._id != action.payload
            );
        });
        builder.addCase(deleteOrder.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(updateOrder.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(updateOrder.fulfilled, (state, action) => {
            state.isLoading = false;
            const updateItem = action.payload;
            const index = state.data.findIndex(
                (item) => item._id === updateItem._id
            );
            if (index !== -1) {
                state.data[index] = updateItem;
            }
        });
        builder.addCase(updateOrder.rejected, (state, action) => {
            state.isLoading = false;
        });
    }
});

export default orderSlice.reducer;