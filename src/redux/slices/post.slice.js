import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";

import {postService} from "../../services";


const initialState = {
    posts: [],
    currentPost: null,
    loading: false,
    error: null,
    onePost: null
};

const getAllPosts = createAsyncThunk(
  'postSlice/getAllPosts',
  async (_, {rejectWithValue})=>{
      try {
          const {data} = await postService.getAll();
          return data;
      }catch (e) {
          return rejectWithValue(e.response.data);
      }
  }
);


const getById = createAsyncThunk(
    'postSlice/getById',
    async ({id}, {rejectWithValue})=>{
        try {
            const {data} = await postService.getById(id);
            return data;
        }catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);



const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers:{
        setCurrentPost: (state, action) => {
            state.currentPost = action.payload;
        },
        deleteById:(state, action) => {
            const index = state.posts.findIndex(value => value.id === action.payload);

            if( JSON.stringify(state.posts[index]) === JSON.stringify(state.currentPost)){
                state.currentPost = null;
            }
            if( JSON.stringify(state.posts[index]) === JSON.stringify(state.onePost)){
                state.onePost = null;
            }
            state.posts.splice(index, 1);
            console.log(current(state.posts));
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.loading = false;
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAllPosts.pending, state => {
                state.loading = true;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.onePost = action.payload;
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

const {reducer: postReducer, actions: {setCurrentPost, deleteById}} = postSlice;

const postActions = {
    setCurrentPost,
    deleteById,
    getAllPosts,
    getById
};

export { postReducer, postActions};
