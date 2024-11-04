import React, { useState } from 'react';
import Button from '../../components/general/Button';
import Login from './Login';
import Register from './Register';
import './auth.css';

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-container">
      <div className="auth-buttons">
        <Button 
          label="Sign In"
          onClick={() => setSwitch(true)}
          className={_switch ? 'active' : ''}
        />
        <Button 
          label="Sign Up"
          onClick={() => setSwitch(false)}
          className={!_switch ? 'active' : ''}
        />
      </div>
      
      {_switch ? (
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      ) : (
        <Register
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      )}
    </div>
  );
}

export default Authentication;
