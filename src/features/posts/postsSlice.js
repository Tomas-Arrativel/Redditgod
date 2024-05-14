import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPopularPosts = createAsyncThunk(
  'posts/fetchPopularPosts',
  async () => {
    const response = await fetch('https://www.reddit.com/r/popular.json');
    const data = await response.json();
    return data;
  },
);

export const PostsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: false,
    ups: [],
    downs: [],
  },
  reducers: {
    upPost(state, action) {
      if (state.ups.some((up) => up === action.payload)) {
        return {
          ...state,
          ups: state.ups.filter((up) => up !== action.payload),
        };
      } else if (state.downs.some((down) => down === action.payload)) {
        return {
          ...state,
          downs: state.downs.filter((down) => down !== action.payload),
          ups: [...state.ups, action.payload],
        };
      } else {
        return {
          ...state,
          ups: [...state.ups, action.payload],
        };
      }
    },

    downPost(state, action) {
      if (state.downs.some((down) => down === action.payload)) {
        return {
          ...state,
          downs: state.downs.filter((down) => down !== action.payload),
        };
      } else if (state.ups.some((up) => up === action.payload)) {
        return {
          ...state,
          ups: state.ups.filter((up) => up !== action.payload),
          downs: [...state.downs, action.payload],
        };
      } else {
        return {
          ...state,
          downs: [...state.downs, action.payload],
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularPosts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchPopularPosts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchPopularPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.posts.push(action.payload);
      });
  },
});

export const selectPosts = (state) => state.posts;
export const selectUps = (state) => state.posts.ups;
export const selectDowns = (state) => state.posts.downs;

export const { upPost, downPost } = PostsSlice.actions;

export default PostsSlice.reducer;
