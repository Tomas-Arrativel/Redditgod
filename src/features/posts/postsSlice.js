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
  },
  reducers: {},
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

export default PostsSlice.reducer;
