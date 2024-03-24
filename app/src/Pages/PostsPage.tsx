import Posts from "@components/Composite/Posts";
import styled from "styled-components";

const Props = {};

export default function PostPage() {
  return (
    <PostContainer>
      <div>
        <h1>Tous les posts</h1>
        <p>
          Retrouvez ici tous les posts publiés sur l'application. Découvrez,
          partagez, commentez : commencez à explorer sans attendre !
        </p>
      </div>
      <Posts />
    </PostContainer>
  );
}

const PostContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  gap: 50px;
`;
