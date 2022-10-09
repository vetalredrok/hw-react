import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";

import {userService} from "../../services";


const initialState = {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
    oneUser: null

};


const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAll();
            return data;
        }catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await userService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);



const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        setCurrentUser:(state, action) => {
            state.currentUser = action.payload;
        },
        deleteById:(state, action) => {
            const index = state.users.findIndex(value => value.id === action.payload);
            console.log(index);

            if( JSON.stringify(state.users[index]) === JSON.stringify(state.currentUser)){
                state.currentUser = null;
            }
            if( JSON.stringify(state.users[index]) === JSON.stringify(state.oneUser)){
                state.oneUser = null;
            }
            state.users.splice(index, 1);
            console.log(current(state.users));
        }
    },
    extraReducers:builder => {
        builder
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAllUsers.pending, state => {
                state.loading = true;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.oneUser = action.payload;
                state.loading = false;
            })
            .addCase(getById.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getById.pending, state => {
                state.loading = true;
            })
    }
});

const {reducer: userReducer, actions: {setCurrentUser, deleteById}} = userSlice;

const userActions = {
    setCurrentUser,
    getAllUsers,
    getById,
    deleteById
};

export {userReducer, userActions};