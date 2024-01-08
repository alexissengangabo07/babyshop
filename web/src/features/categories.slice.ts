import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '@/features/api/categories';

interface Category {
    _id: string;
    title: string
}

interface CategoryState {
    data: Category[];
    isLoading: boolean;
}

const initialState: CategoryState = {
    data: [],
    isLoading: false
};

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async (_, { rejectWithValue }) => {
    try {
        const response = await api.fetchCategories();
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const fetchCategory = createAsyncThunk('categories/fetchCategory', async (categoryId: any, { rejectWithValue }) => {
    try {
        const response = await api.fetchCategory(categoryId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const createCategory = createAsyncThunk('categories/createCategory', async (newCategory: object, { rejectWithValue }) => {
    try {
        const response = await api.createCategory(newCategory);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const updateCategory = createAsyncThunk('categories/updateCategory', async (category: { _id: string, title: string }, { rejectWithValue }) => {
    try {
        const response = await api.updateCategory(category._id, { title: category.title });
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const deleteCategory = createAsyncThunk('categories/deleteCategory', async (categoryId: string, { rejectWithValue }) => {
    try {
        const response = await api.deleteCategory(categoryId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCategories.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            // console.log(state)
        });
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(createCategory.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(createCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(createCategory.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(deleteCategory.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(deleteCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter(
                (item) => item._id != action.meta.arg
            );
        });
        builder.addCase(deleteCategory.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(updateCategory.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(updateCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            const updateItem = action.payload;
            const index = state.data.findIndex(
                (item) => item._id === updateItem._id
            );
            if (index !== -1) {
                state.data[index] = updateItem;
            }
        });
        builder.addCase(updateCategory.rejected, (state, action) => {
            state.isLoading = false;
        });
    }
});

export default categorySlice.reducer;