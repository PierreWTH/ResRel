import InputText from "@components/Common/Inputs/InputText";
import TextArea from "@components/Common/Inputs/TextArea";
import Button from "@components/Common/CommonButton";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { postPost } from "@services/PostService";
import { toast } from "react-toastify";
import styled from "styled-components";

type Props = {};

type PostFormInputs = {
  title: string;
  content: string;
  description: string;
};

const PostForm = ({}: Props) => {
  const validation = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
    description: Yup.string().required("Description is required"),
  });

  const handlePost = (e: PostFormInputs) => {
    postPost(e.title, e.description, e.content)
      .then((res) => {
        if (res) {
          toast.success("Votre post a été publié !");
        }
      })
      .catch((e) => {
        toast.warning(e);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormInputs>({ resolver: yupResolver(validation) });

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(handlePost)}>
        <InputText
          label="Titre"
          {...register("title")}
          placeholder="Titre de votre post."
        />
        {errors.title ? <p>{errors.title.message}</p> : ""}

        <InputText
          label="Description"
          placeholder="Court description de votre post."
          {...register("description")}
        />
        {errors.content ? <p>{errors.content.message}</p> : ""}

        <TextArea
          label="Contenu du post"
          placeholder="Contenu de votre post."
          {...register("content")}
        />
        {errors.content ? <p>{errors.content.message}</p> : ""}

        <Button submit label="Publier le post " />
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export default PostForm;
