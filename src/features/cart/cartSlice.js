import {createSlice} from '@reduxjs/toolkit';

const slice=createSlice({
  name:'cart',
  initialState:{items:[]},
  reducers:{
    add:(s,a)=>{
      const e=s.items.find(i=>i.id===a.payload.id);
      e?e.qty++:s.items.push({...a.payload,qty:1});
    },
    remove:(s,a)=>{s.items=s.items.filter(i=>i.id!==a.payload);},
    clear:s=>{s.items=[];},
  }
});
export const {add,remove,clear}=slice.actions;
export default slice.reducer;
