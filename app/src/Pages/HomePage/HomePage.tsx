import { toast } from "react-toastify";
import PostForm from "../../Components/PostForm/PostForm";
import Posts from "../../Components/Posts/Posts";
import "./HomePage.css";
import { LayoutPadding } from "../../Components/Layout/LayoutPadding/LayoutPadding";

const Props = {};

export default function HomePage() {
  const toastMessage = () => {
    toast.success("Hello World how are you today");
  };
  return (
    <LayoutPadding>
      <div className="header">
        <h1>Home</h1>
        <p>Bienvenue sur votre application ReSources Relationnelles</p>
      </div>
      <h2> Les posts les plus réçents : </h2>
      <Posts />
      <button onClick={toastMessage}></button>
    </LayoutPadding>
  );
}
