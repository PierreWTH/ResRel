import InputText from "../InputText/InputText";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { postPost } from "../../Services/PostService";
import { toast } from "react-toastify";

type Props = {};

type PostFormInputs = {
  title: string;
  content: string;
};

const PostForm = ({}: Props) => {
  const validation = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
  });

  const handlePost = (e: PostFormInputs) => {
    postPost(e.title, e.content)
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
    <div className="">
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit(handlePost)}>
        <div>
          <InputText
            label="Titre"
            {...register("title")}
            placeholder="Titre de votre post."
          />
          {errors.title ? <p>{errors.title.message}</p> : ""}
        </div>
        <div>
          <InputText
            label="Contenu du post"
            password
            placeholder="Contenu de votre post."
            {...register("content")}
          />
          {errors.content ? <p>{errors.content.message}</p> : ""}
        </div>
        <Button submit label="Se connecter " color="white" />
      </form>
    </div>
  );
};

export default PostForm;
