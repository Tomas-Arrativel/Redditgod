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
      if (state.ups.some(action.payload)) {
        return state.ups.filter((id) => id !== action.payload);
      } else if (state.downs.some(action.payload)) {
        state.downs.filter((id) => id !== action.payload);
        state.ups.push(action.payload);
      } else return state.ups.push(action.payload);
    },
    downPost(state, action) {
      if (state.downs.some(action.payload)) {
        return state.downs.filter((id) => id !== action.payload);
      } else if (state.ups.some(action.payload)) {
        state.ups.filter((id) => id !== action.payload);
        state.downs.push(action.payload);
      } else return state.downs.push(action.payload);
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

const { upPostm, downPost } = PostsSlice.actions;

export default PostsSlice.reducer;
