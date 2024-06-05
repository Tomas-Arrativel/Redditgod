import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSearch = createAsyncThunk('search/fetchSearch', async (q) => {
  const response = await fetch(`https://www.reddit.com/search.json?q=${q}`);
  const data = await response.json();
  return data;
});

export const SearchSlice = createSlice({
  name: 'search',
  initialState: {
    posts: [],
    loading: false,
    error: false,
    ups: [],
    downs: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(SearchSlice.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(SearchSlice.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(SearchSlice.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.posts.push(action.payload);
      });
  },
});
