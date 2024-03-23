import InputText from "../InputText/InputText";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { postPost } from "../../Services/PostService";
import { toast } from "react-toastify";
import "./PostForm.css";

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
    <div className="post-form">
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
            label="Description"
            placeholder="Court description de votre post."
            {...register("description")}
          />
          {errors.content ? <p>{errors.content.message}</p> : ""}
        </div>
        <div>
          <TextArea
            label="Contenu du post"
            placeholder="Contenu de votre post."
            {...register("content")}
          />
          {errors.content ? <p>{errors.content.message}</p> : ""}
        </div>

        <Button submit label="Publier le post " />
      </form>
    </div>
  );
};

export default PostForm;
