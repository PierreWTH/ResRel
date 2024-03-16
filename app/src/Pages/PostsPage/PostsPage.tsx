import Posts from "../../Components/Posts/Posts";

const Props = {};

export default function PostPage() {
  return (
    <section>
      <div className="header">
        <h1>Tous les posts</h1>
        <p>Retrouvez ici tous les posts publiés sur l'application. </p>
      </div>
      <Posts />
    </section>
  );
}
