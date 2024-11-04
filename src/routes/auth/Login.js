import React from 'react';
import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './auth.css';

function Login({ username, password, setUsername, setPassword }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // La logique de connexion sera ajoutée plus tard
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
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
        label="Login"
        className="auth-submit"
        onClick={handleSubmit}
      />
    </form>
  );
}

export default Login;
