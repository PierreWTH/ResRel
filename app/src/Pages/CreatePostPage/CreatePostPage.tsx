import PostForm from "../../Components/PostForm/PostForm";

const Props = {};

export default function CreatePostPage() {
  return (
    <section>
      <div className="header">
        <h1>Créer un post</h1>
        <p>Commencer a partager avec la communauté ResRel ! </p>
      </div>
      <PostForm />
    </section>
  );
}
