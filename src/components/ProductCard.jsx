import React from 'react';
import {useDispatch} from 'react-redux';
import {add} from '../features/cart/cartSlice';

export default function ProductCard({product}){
  const d=useDispatch();
  return(
    <div style={{border:'1px solid #ddd',padding:'1rem'}}>
      <img src={product.thumbnail} alt={product.title} style={{width:'100%',height:'120px',objectFit:'cover'}}/>
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button className="btn primary" onClick={()=>d(add(product))}>Add</button>
    </div>
  );
}
