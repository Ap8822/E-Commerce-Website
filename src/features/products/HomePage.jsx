import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {fetchProducts} from './productSlice';
import ProductCard from '../../components/ProductCard';

export default function HomePage(){
  const dispatch=useDispatch();
  const {items,status}=useSelector(s=>s.products);
  const [cat,setCat]=useState('all'); const [page,setPage]=useState(1);
  const per=12;
  useEffect(()=>{ if(status==='idle') dispatch(fetchProducts());},[status]);

  const cats=[...new Set(items.map(p=>p.category))];
  const filtered=cat==='all'?items:items.filter(p=>p.category===cat);
  const shown=filtered.slice((page-1)*per,page*per);

  return(
    <div className="container">
      <select value={cat} onChange={e=>{setCat(e.target.value);setPage(1);}}>
        <option value="all">All</option>{cats.map(c=><option key={c}>{c}</option>)}
      </select>

      {status==='loading'&&<p>Loading…</p>}
      <div className="grid">
        {shown.map(p=><ProductCard key={p.id} product={p}/>)}
      </div>

      {[...Array(Math.ceil(filtered.length/per)).keys()].map(n=>
        <button key={n} className="btn" onClick={()=>setPage(n+1)}
          style={{fontWeight:page===n+1?'bold':'normal'}}>{n+1}</button>)}
    </div>
  );
}
