import React from "react";
import { useAuth } from "../../Context/useAuth";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logoutUser } = useAuth();
  return (
    <div>
      <h1> Ceci est une navbar</h1>
      {isLoggedIn() ? (
        <div>
          <p> Bienvenue, {user?.email} </p>
          <a onClick={logoutUser}>Se déconnecter</a>
        </div>
      ) : (
        <div>
          <Link to="/login"> Connexion </Link>
          <Link to="/register"> Inscription </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
