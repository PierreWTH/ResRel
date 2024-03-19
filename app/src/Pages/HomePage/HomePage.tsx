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
        <h1>Bienvenue sur votre application ReSources Relationnelles</h1>
        <p>
          Ici, vous pouvez partager vos expériences, demander de l'aide et
          communiquer avec d'autres personnes qui partagent vos intérêts.
          Rejoignez-nous et faites partie d'une communauté qui valorise le
          soutien mutuel et l'échange d'idées.
        </p>
      </div>
      <h2> Les posts les plus réçents : </h2>
      <Posts limit={4} />
    </LayoutPadding>
  );
}
