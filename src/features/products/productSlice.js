import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

export const fetchProducts = createAsyncThunk('products/fetch', async()=>{
  const res = await api.get('/products?limit=100');
  return res.data.products;
});

const slice = createSlice({
  name:'products',
  initialState:{items:[],status:'idle'},
  reducers:{},
  extraReducers:b=>{
    b.addCase(fetchProducts.pending, s=>{s.status='loading';})
     .addCase(fetchProducts.fulfilled,(s,a)=>{s.items=a.payload;s.status='succeeded';});
  }
});
export default slice.reducer;
