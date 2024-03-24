import Posts from "@components/Composite/Posts";
import "./HomePage.css";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { RiMessage2Line } from "react-icons/ri";
import { CiTextAlignCenter } from "react-icons/ci";
import { LayoutTwoColumn } from "@components/Layout/LayoutTwoColumn";
import homeSvg from "@assets/home.svg";
const Props = {};

export default function HomePage() {
  return (
    <section className="home-container">
      <section className="home-info">
        <LayoutTwoColumn
          children1={
            <div className="home-column1">
              <h1> Bienvenue sur votre plateforme RessourcesRelationnelles </h1>
              <p>
                Vous êtes ici pour partager vos expériences, demander de l'aide
                et communiquer avec d'autres personnes qui partagent vos
                intérêts. Découvrez des ressources et des outils pour vous aider
                à vous développer et à vous épanouir.
              </p>
            </div>
          }
          children2={
            <div>
              <img className="login-svg" src={homeSvg} alt="logo" />
            </div>
          }
        />
        <h2> Les posts les plus réçents : </h2>
        <Posts limit={4} />
      </section>
      <section className="home-benefits">
        <div className="benefits">
          <div className="benefits-column">
            <div>
              <h2> Entraide </h2>
              <LiaUserFriendsSolid className="benefits-icon" />
            </div>
            <p>
              Partagez vos expériences, demandez de l'aide et communiquez avec
              d'autres personnes qui partagent vos intérêts.
            </p>
          </div>
          <div className="separator"></div>
          <div className="benefits-column">
            <div>
              <h2> Discussion </h2>
              <RiMessage2Line className="benefits-icon" />
            </div>
            <p>
              Partagez vos expériences, demandez de l'aide et communiquez avec
              d'autres personnes qui partagent vos intérêts.
            </p>
          </div>
          <div className="separator"></div>
          <div className="benefits-column">
            <div>
              <h2> Partage </h2>
              <CiTextAlignCenter className="benefits-icon" />
            </div>
            <p>
              Partagez vos expériences, demandez de l'aide et communiquez avec
              d'autres personnes qui partagent vos intérêts.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
