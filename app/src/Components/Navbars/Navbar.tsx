import React from "react";
import { useAuth } from "../../Context/useAuth";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

type Props = {};

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logoutUser } = useAuth();
  return (
    <nav>
      <div>
        <img src={logo} alt="logo" />
      </div>
      {isLoggedIn() ? (
        <div className="links">
          <p> Bienvenue, {user?.email} </p>
          <a onClick={logoutUser}>Se déconnecter</a>
        </div>
      ) : (
        <div className="links">
          <Link to="/login"> Connexion </Link>
          <Link to="/register"> Inscription </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
