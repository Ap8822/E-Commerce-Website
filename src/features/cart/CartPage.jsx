import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {remove,clear} from './cartSlice';

export default function CartPage(){
  const {items}=useSelector(s=>s.cart); const d=useDispatch();
  const total=items.reduce((s,i)=>s+i.price*i.qty,0).toFixed(2);
  return(
    <div className="container">
      <h2>Checkout</h2>
      {items.length===0 && <p>No items.</p>}
      {items.map(i=>(
        <div key={i.id} style={{display:'flex',justifyContent:'space-between'}}>
          <span>{i.title} × {i.qty}</span>
          <span>${(i.price*i.qty).toFixed(2)}</span>
          <button onClick={()=>d(remove(i.id))}>x</button>
        </div>
      ))}
      {items.length>0 && <>
        <h3>Total: ${total}</h3>
        <button className="btn primary" onClick={()=>d(clear())}>Place Order</button>
      </>}
    </div>
  );
}
