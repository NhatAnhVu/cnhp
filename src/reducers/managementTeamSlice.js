import { combineReducers, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createManagementTeam, deleteManagementTeam, getAll, getListManagementTeam, getRegion, updateManagementTeam } from "../services/apis/managementTeam";

const initialState = {
    overViewGet: null,
    status: 'idle',
    error: null
}

//list bo loc
const listManagementSlice = createSlice({
    name: 'listAllStatus' ,
    initialState,
    extraReducers: (builder) => {
        builder
        //fetchOverView
        .addCase(fetchgetList.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchgetList.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.listAllStatus = action.payload
        })
        .addCase(fetchgetList.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

//list
const listAllManagementSlice = createSlice({
    name: 'listAllManage' ,
    initialState: {
        postList: null,
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchgetListAll.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchgetListAll.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.listAllManage = action.payload
        })
        .addCase(fetchgetListAll.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

//update
const updateManageTeamSlice = createSlice({
    name: 'updateManageTeam' ,
    initialState: {
        postList: null,
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUpdateManageTeam.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchUpdateManageTeam.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.updateManageTeam = action.payload
        })
        .addCase(fetchUpdateManageTeam.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

//delete
const deleteManageTeamSlice = createSlice({
    name: 'deleteManageTeam' ,
    initialState: {
        deleteManageTeam: null,
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDeteleManageTeam.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchDeteleManageTeam.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.deleteManageTeam = action.payload
        })
        .addCase(fetchDeteleManageTeam.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

//create
const createManageTeamSlice = createSlice({
    name: 'createManageTeam' ,
    initialState: {
        postList: null,
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCreateManageTeam.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchCreateManageTeam.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.createManageTeam = action.payload
        })
        .addCase(fetchCreateManageTeam.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});


//get region
const regionSlice = createSlice({
    name: 'region' ,
    initialState: {
        region: null,
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchGetRegion.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchGetRegion.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.region = action.payload
        })
        .addCase(fetchGetRegion.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

//get d/s to quan ly
export const fetchgetList = createAsyncThunk(
    "listAllStatus/fetchgetList", async(
        body
    , {rejectWithValue}) => {
        try {
            const response = await getListManagementTeam(
                body
            );
            // debugger;
            return response;
        } catch (error) {
            // debugger;
            return rejectWithValue(error);
        }
    }
);

//get All list
export const fetchgetListAll = createAsyncThunk(
    "listAllManage/fetchgetListAll", async(rejectWithValue) => {
        try {
            const response = await getAll();
            // debugger;
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

//update Manage Team
export const fetchUpdateManageTeam = createAsyncThunk(
    "updateManageTeam/fetchUpdateManageTeam", async(
        body
    , {rejectWithValue}) => {
        try {
            const response = await updateManagementTeam(body);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

//delete
export const fetchDeteleManageTeam = createAsyncThunk(
    "deleteManageTeam/fetchDeteleManageTeam", async(
        id
    , {rejectWithValue}) => {
        try {
            const response = await deleteManagementTeam(id);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

//create Manage Team
export const fetchCreateManageTeam = createAsyncThunk(
    "createManageTeam/fetchCreateManageTeam", async(
        body
    , {rejectWithValue}) => {
        try {
            const response = await createManagementTeam(body);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

//region
export const fetchGetRegion = createAsyncThunk(
    "region/fetchGetRegion", async(
        id
    , {rejectWithValue}) => {
        try {
            const response = await getRegion(id);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const managementTeamReducer = combineReducers({
    listMagagementTeam : listManagementSlice.reducer,
    listAll : listAllManagementSlice.reducer,
    updateManageTeam: updateManageTeamSlice.reducer,
    deleteManageTeam: deleteManageTeamSlice.reducer,
    createManageTeam: createManageTeamSlice.reducer, 
    region : regionSlice.reducer,
})

export default managementTeamReducer;