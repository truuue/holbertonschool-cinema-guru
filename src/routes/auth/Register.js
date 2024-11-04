import React from 'react';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './auth.css';

function Register({ username, password, setUsername, setPassword }) {
  return (
    <>
      <Input
        label="Username"
        type="text"
        value={username}
        setValue={setUsername}
        icon={faUser}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        setValue={setPassword}
        icon={faLock}
      />
      <Button 
        label="Register"
        className="auth-submit"
        type="submit"
      />
    </>
  );
}

export default Register;
