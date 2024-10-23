import React, { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./routes/dashboard/Dashboard";
import Authentication from "./routes/auth/Authentication";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      axios
        .post(
          "/api/auth/",
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(response => {
          setIsLoggedIn(true);
          setUserUsername(response.data.username);
        })
        .catch(error => {
          console.error("Erreur d'authentification:", error);
        });
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Dashboard username={userUsername} />
        </>
      ) : (
        <>
          <Authentication />
        </>
      )}
    </div>
  );
}

export default App;
