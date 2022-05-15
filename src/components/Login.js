import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/user';

const Login = () => {
  const dispatch = useDispatch()

  return <div>
    <button onClick={() => {dispatch(login({name: 'German', age: 0, email: 'germancobian@hotmail.com'}))}}>Login</button>
    <button className="l-space" onClick={() => {dispatch(logout())}}>Logout</button>
  </div>;
};

export default Login;