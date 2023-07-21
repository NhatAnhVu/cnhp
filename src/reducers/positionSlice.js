import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetList } from '../services/apis/positions';
import { UpdateListPosition } from '../services/apis/positions';
import { message } from 'antd';

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

//Slide update TagList
const updatePosotionSlice = createSlice({
    name: 'updatePosition',
    initialState: {
        updatePosition: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            //fetchOverView
            .addCase(fetUpdatePosition.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetUpdatePosition.fulfilled, (state, action) => {
                state.isLoading = false;
                state.updatePosition = action.payload;
                message.error('Cập nhật thẻ thành công!');
            })
            .addCase(fetUpdatePosition.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
                message.error('Cập nhật thẻ thất bại!');
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

export const fetUpdatePosition = createAsyncThunk('updatePosition/fetUpdatePosition', async (requestBody) => {
    const response = await UpdateListPosition(requestBody);
    return response;
});

export default positionSlice.reducer;
