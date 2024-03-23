import Posts from "../../Components/Posts/Posts";
import "./PostsPage.css";

const Props = {};

export default function PostPage() {
  return (
    <section className="post-page">
      <div className="header">
        <h1>Tous les posts</h1>
        <p>
          Retrouvez ici tous les posts publiés sur l'application. Découvrez,
          partagez, commentez : commencez à explorer sans attendre !
        </p>
      </div>
      <Posts />
    </section>
  );
}
