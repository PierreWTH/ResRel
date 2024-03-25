import Posts from "@components/Composite/Posts";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { RiMessage2Line } from "react-icons/ri";
import { CiTextAlignCenter } from "react-icons/ci";
import { LayoutTwoColumn } from "@components/Layout/LayoutTwoColumn";
import homeSvg from "@assets/home.svg";
import styled from "styled-components";
import { TitleH1, TitleH2 } from "@style/Components";

const Props = {};

export default function HomePage() {
  return (
    <HomeContainer>
      <HomeInfo>
        <LayoutTwoColumn
          children1={
            <HomeColumn>
              <TitleH1>
                Bienvenue sur votre plateforme RessourcesRelationnelles
              </TitleH1>
              <p>
                Vous êtes ici pour partager vos expériences, demander de l'aide
                et communiquer avec d'autres personnes qui partagent vos
                intérêts. Découvrez des ressources et des outils pour vous aider
                à vous développer et à vous épanouir.
              </p>
            </HomeColumn>
          }
          children2={
            <div>
              <Image src={homeSvg} alt="logo" />
            </div>
          }
        />
        <TitleH2> Les posts les plus réçents : </TitleH2>
        <Posts limit={4} />
      </HomeInfo>
      <BenefitsContainer>
        <Benefits>
          <BenefitsColumn>
            <div>
              <h2> Entraide </h2>
              <IconFriends />
            </div>
            <p>
              Partagez vos expériences, demandez de l'aide et communiquez avec
              d'autres personnes qui partagent vos intérêts.
            </p>
          </BenefitsColumn>
          <Separator />
          <BenefitsColumn>
            <div>
              <h2> Discussion </h2>
              <IconMessage />
            </div>
            <p>
              Partagez vos expériences, demandez de l'aide et communiquez avec
              d'autres personnes qui partagent vos intérêts.
            </p>
          </BenefitsColumn>
          <Separator />
          <BenefitsColumn>
            <div>
              <h2> Partage </h2>
              <IconText />
            </div>
            <p>
              Partagez vos expériences, demandez de l'aide et communiquez avec
              d'autres personnes qui partagent vos intérêts.
            </p>
          </BenefitsColumn>
        </Benefits>
      </BenefitsContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const HomeInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 3rem 2rem 0rem 2rem;
`;
const Image = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
`;

const HomeColumn = styled.div`
  width: 100%;
  max-width: 800px;
`;

const BenefitsContainer = styled.section`
  background-color: #f7f7f7;
  padding: 4rem 2rem;
  height: 100%;
`;

const Benefits = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  height: 100%;
  color: black;
`;

const BenefitsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 30%;
  text-align: center;
`;

const Separator = styled.div`
  height: 100%;
  width: 1px;
  background-color: #6b63ff;
`;

const IconText = styled(CiTextAlignCenter)`
  font-size: 60px;
  color: #6b63ff;
`;

const IconMessage = styled(RiMessage2Line)`
  font-size: 60px;
  color: #6b63ff;
`;

const IconFriends = styled(LiaUserFriendsSolid)`
  font-size: 60px;
  color: #6b63ff;
`;
