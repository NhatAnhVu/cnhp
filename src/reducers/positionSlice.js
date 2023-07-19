import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetList } from '../services/apis/positions';

const initialState = {
    positionGet: null,
    loading: false,
    error: null
};

const positionSlice = createSlice({
    name: 'position',
    initialState,
    extraReducers: (builder) => {
        builder
            //fetchPosition
            .addCase(fetchPosition.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosition.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.positionGet = action.payload;
            })
            .addCase(fetchPosition.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const fetchPosition = createAsyncThunk('position/fetchPosition', async (body, { rejectWithValue }) => {
    try {
        const response = await GetList(body);
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export default positionSlice.reducer;
