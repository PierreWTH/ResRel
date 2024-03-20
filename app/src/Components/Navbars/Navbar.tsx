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
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      {isLoggedIn() ? (
        <div className="links">
          <Link to="/">Acceuil </Link>
          <Link to="/posts"> Tous les posts </Link>
          <Link to="/createpost">Créer un post </Link>
          <p> Bienvenue, {user?.username} </p>
          <a onClick={logoutUser}>Se déconnecter</a>
        </div>
      ) : (
        <div className="links">
          <Link to="/">Acceuil </Link>
          <Link to="/login"> Connexion </Link>
          <Link to="/register"> Inscription </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
