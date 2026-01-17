import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './authSlice';
import { Navigate } from 'react-router-dom';

export default function LoginPage() {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector(s=>s.auth);
  const [cred,setCred]=useState({username:'',password:''});
  if (user) return <Navigate to="/" replace />;

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={e=>{e.preventDefault();dispatch(login(cred));}}>
        <input placeholder="username" value={cred.username}
          onChange={e=>setCred({...cred,username:e.target.value})}/><br/>
        <input type="password" placeholder="password" value={cred.password}
          onChange={e=>setCred({...cred,password:e.target.value})}/><br/>
        <button className="btn primary" disabled={status==='loading'}>
          {status==='loading'?'...' : 'Sign in'}
        </button>
        {error && <p style={{color:'red'}}>{error}</p>}
      </form>
    </div>
  );
}
