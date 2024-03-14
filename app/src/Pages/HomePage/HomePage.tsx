import PostForm from "../../Components/PostForm/PostForm";
import Posts from "../../Components/Posts/Posts";
import "./HomePage.css";

const Props = {};

export default function HomePage() {
  return (
    <section>
      <div className="header">
        <h1>Home</h1>
        <p>Bienvenue sur votre application ReSources Relationnelles</p>
      </div>
      <h2> Les posts les plus réçents : </h2>
      <Posts />
    </section>
  );
}
