import PostForm from "../../Components/PostForm/PostForm";
import Posts from "../../Components/Posts/Posts";

const Props = {};

export default function HomePage() {
  return (
    <section>
      <h1>Home</h1>
      <p>Bienvenue sur votre application ReSources Relationnelles</p>
      <Posts />
      <PostForm />
    </section>
  );
}
