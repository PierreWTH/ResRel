import PostForm from "../../Components/PostForm/PostForm";
import "./CreatePostPage.css";

const Props = {};

export default function CreatePostPage() {
  return (
    <section className="post-page">
      <div className="header">
        <h1>Créer un post</h1>
        <p>
          Commencez a partager avec la communauté ResRel ! Une astuce, une
          pensée, une vidéo à partager ? Faites nous découvrir ce qui vous
          intéresse.{" "}
        </p>
      </div>
      <div className="postform-wrapper">
        <PostForm />
      </div>
    </section>
  );
}
