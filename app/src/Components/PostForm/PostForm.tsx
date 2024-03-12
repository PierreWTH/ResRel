import InputText from "../InputText/InputText";
import TextArea from "../TextArea/TextArea";

type Props = {};

const PostForm = ({}: Props) => {
  return (
    <div className="input-wrapper">
      <InputText label="Titre du post" value="test" />
      <TextArea label="Contenu du post" value="test" />
    </div>
  );
};

export default PostForm;
