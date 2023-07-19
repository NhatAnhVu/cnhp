import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDetailOverView, getOverview } from '../services/apis/overview';

const initialState = {
    overViewGet: null,
    status: 'idle',
    error: null
};

const overViewSlice = createSlice({
    name: 'overview',
    initialState,
    extraReducers: (builder) => {
        builder
            //fetchOverView
            .addCase(fetchOverView.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchOverView.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.overViewGet = action.payload;
            })
            .addCase(fetchOverView.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

// const overViewDetailsSlice = createSlice({
//     name: 'overviewDetils' ,
//     initialState,
//     extraReducers: (builder) => {
//         builder
//         .addCase(fetchDetailsOverView.pending, (state) => {
//             state.status = 'loading'
//         })
//         .addCase(fetchDetailsOverView.fulfilled, (state, action) => {
//             state.status = 'succeeded'
//             state.overViewGet = action.payload
//         })
//         .addCase(fetchDetailsOverView.rejected, (state, action) => {
//             state.status = 'failed';
//             state.error = action.error.message;
//         })
//     }
// });

//fetDetailOverView

export const fetchOverView = createAsyncThunk('overview/fetchOverView', async (body, { rejectWithValue }) => {
    try {
        const response = await getOverview(body);
        console.log('111111111111', response);
        return response;
    } catch (error) {
        return rejectWithValue(error);
    }
});
// export const fetchDetailsOverView = createAsyncThunk(
//     "overview/fetchDetailsOverView", async(
//         body
//     , {rejectWithValue}) => {
//         try {
//             const response = await getDetailOverView(
//                 body
//             );
//             return response;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// );

export default overViewSlice.reducer;
