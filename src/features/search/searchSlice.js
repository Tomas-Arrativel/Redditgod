import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSearch = createAsyncThunk('posts/fetchSearch', async (q) => {
  const response = await fetch(`https://www.reddit.com/search.json?q=${q}`);
  const data = await response.json();
  return data;
});
