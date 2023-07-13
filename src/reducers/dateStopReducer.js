import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Login, Logout } from '../services/apis/auth';

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload.Object.Token;
                state.loading = false;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Logout
            .addCase(logout.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.loading = false;
                state.user = null;
                state.isAuthenticated = false;
            });
    }
});

export const login = createAsyncThunk('auth/login', async ({ Username, Password }, { rejectWithValue }) => {
    try {
        const response = await Login({ Username, Password });
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        const response = await Logout();
        return response;
    } catch (error) {
        console.log('Logout failed:', error);
    }
});

export default authSlice.reducer;
