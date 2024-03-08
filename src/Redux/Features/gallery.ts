import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../Store/index'; 
import { BASE_URL } from '../../utils/apiutils';

interface Gallery {
  _id: string;
  title: string;
  description?: string;
  thumbnailImage: string;
  images: string[];
  createdAt: string;
}

interface GalleryState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  galleries: Gallery[];
}

const initialState: GalleryState = {
  status: 'idle',
  error: null,
  galleries: [],
};

export const fetchAllGalleries = createAsyncThunk(
  'galleries/fetchAllGalleries',
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/gallery/all`);
      return response.data.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const galleriesSlice = createSlice({
  name: 'galleries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllGalleries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllGalleries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.galleries = action.payload;
      })
      .addCase(fetchAllGalleries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const selectGalleries = (state: RootState) => state.galleries.galleries;

export default galleriesSlice.reducer;
