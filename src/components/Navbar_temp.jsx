import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function Navbar(){
  const count=useSelector(s=>s.cart.items.reduce((n,i)=>n+i.qty,0));
  return(
    <nav style={{background:'#eee',padding:'1rem',display:'flex',justifyContent:'space-between'}}>
      <Link to="/">Shop</Link>
      <div style={{display:'flex',gap:'1rem'}}>
        <Link to="/cart">Cart ({count})</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
