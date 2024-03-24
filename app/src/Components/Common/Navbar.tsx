import { useAuth } from "../../Context/useAuth";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styled from "styled-components";

type Props = {};

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logoutUser } = useAuth();
  return (
    <Nav>
      <div>
        <Link to="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      {isLoggedIn() ? (
        <LinksWrapper>
          <Link to="/">Acceuil </Link>
          <Link to="/posts"> Tous les posts </Link>
          <Link to="/createpost">Créer un post </Link>
          <p> Bienvenue, {user?.username} </p>
          <a onClick={logoutUser}>Se déconnecter</a>
        </LinksWrapper>
      ) : (
        <LinksWrapper>
          <Link to="/">Acceuil </Link>
          <Link to="/login"> Connexion </Link>
          <Link to="/register"> Inscription </Link>
        </LinksWrapper>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 70px;
  height: auto;
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export default Navbar;
