import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '@/features/api/users';

interface User {
    _id: string;
    username: string,
    first_name: string,
    last_name: string,
    telephone?: string,
    adresse?: string,
    email?: string,
    password: string,
    role: string
}

interface UserState {
    data: User[];
    isLoading: boolean;
    isError: boolean;
    message: string;
}

const initialState: UserState = {
    data: [],
    isLoading: false,
    isError: false,
    message: ''
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
    try {
        const response = await api.fetchUsers();
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const fetchUser = createAsyncThunk('users/fetchUser', async (userId: string, { rejectWithValue }) => {
    try {
        const response = await api.fetchUser(userId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const createUser = createAsyncThunk('users/createUser', async (newUser: object, { rejectWithValue }) => {
    try {
        const response = await api.createUser(newUser);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const loginUser = createAsyncThunk('users/loginUser', async (user: object, { rejectWithValue }) => {
    try {
        const response = await api.loginUser(user);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const updateUser = createAsyncThunk('users/updateUser', async (userId: string, { rejectWithValue }) => {
    try {
        const response = await api.updateUser(userId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const deleteUser = createAsyncThunk('users/deleteUsers', async (userId: string, { rejectWithValue }) => {
    try {
        const response = await api.deleteUser(userId);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            // console.log(state.users);
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(createUser.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(createUser.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(loginUser.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            // state.data.push(action.payload);
            console.log(action)
            // localStorage.setItem('user', JSON.stringify(action.payload));
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true;
            state.message = action.payload?.response?.data?.message;
        });

        builder.addCase(deleteUser.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter(
                (item) => item._id != action.meta.arg
            );
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(updateUser.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.isLoading = false;
            const updateItem = action.payload;
            const index = state.data.findIndex(
                (item) => item._id === updateItem._id
            );
            if (index !== -1) {
                state.data[index] = updateItem;
            }
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.isLoading = false;
        });
    }
});

export default userSlice.reducer;