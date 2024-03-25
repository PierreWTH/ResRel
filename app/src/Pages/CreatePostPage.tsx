import PostForm from "@components/Composite/PostForm";
import styled from "styled-components";
import { Header } from "@style/Components";

const Props = {};

export default function CreatePostPage() {
  return (
    <section>
      <Header>
        <h1>Créer un post</h1>
        <p>
          Commencez a partager avec la communauté ResRel ! Une astuce, une
          pensée, une vidéo à partager ? Faites nous découvrir ce qui vous
          intéresse.{" "}
        </p>
      </Header>
      <Wrapper>
        <PostForm />
      </Wrapper>
    </section>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: #f7f7f7;
`;
