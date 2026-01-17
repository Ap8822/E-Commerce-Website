import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

export const login = createAsyncThunk('auth/login', async (cred, thunkAPI) => {
  try {
    const res = await api.post('/auth/login', cred);
    localStorage.setItem('jwt', res.data.token);
    return res.data;
  } catch {
    return thunkAPI.rejectWithValue('Wrong credentials');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, status: 'idle', error: null },
  reducers: { logout: state => { state.user = null; localStorage.removeItem('jwt'); } },
  extraReducers: b => {
    b.addCase(login.pending, s => { s.status = 'loading'; })
     .addCase(login.fulfilled, (s,a) => { s.status='succeeded'; s.user=a.payload; })
     .addCase(login.rejected, (s,a) => { s.status='failed'; s.error=a.payload; });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
