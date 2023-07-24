// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { AddPosition, DeletePosition, GetList } from '../services/apis/positions';
// import { UpdateListPosition } from '../services/apis/positions';
// import { message } from 'antd';

// const initialState = {
//     positionGet: null,
//     loading: false,
//     error: null
// };

// const positionSlice = createSlice({
//     name: 'position',
//     initialState,
//     extraReducers: (builder) => {
//         builder
//             //fetchPosition
//             .addCase(fetchPosition.pending, (state) => {
//                 state.status = 'loading';
//             })
//             .addCase(fetchPosition.fulfilled, (state, action) => {
//                 state.status = 'succeeded';
//                 state.positionGet = action.payload;
//             })
//             .addCase(fetchPosition.rejected, (state, action) => {
//                 state.status = 'failed';
//                 state.error = action.error.message;
//             });
//     }
// });

// export const fetchAddPosition = createAsyncThunk('addPosition/fetchAddPosition', async (requestBody, { rejectWithValue }) => {
//     try {
//         const response = await AddPosition(requestBody);
//         debugger;
//         return response;
//     } catch (error) {
//         debugger;
//         return rejectWithValue(error);
//     }
// });

// export default positionSlice.reducer;
