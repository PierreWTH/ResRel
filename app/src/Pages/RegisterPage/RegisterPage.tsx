import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Context/useAuth";
import { useForm } from "react-hook-form";
import { Navigate, Link } from "react-router-dom";
import { LayoutTwoColumn } from "../../Components/Layout/LayoutTwoColumn/LayoutTwoColumn";
import InputText from "../../Components/InputText/InputText";
import Button from "../../Components/Button/Button";
import registerSvg from "../../assets/register.svg";
import "../LoginPage/LoginPage.css";

type Props = {};

type RegisterFormsInputs = {
  email: string;
  username: string;
  password: string;
};

const validation = Yup.object().shape({
  email: Yup.string()
    .email("Email invalide.")
    .required("Veuillez renseigner un email."),
  password: Yup.string().required("Veuillez renseigner un mot de passe."),
  username: Yup.string().required("Veuillez renseigner un pseudo."),
});

const RegisterPage = (props: Props) => {
  const { registerUser, isLoggedIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormsInputs>({ resolver: yupResolver(validation) });

  const handleLogin = (form: RegisterFormsInputs) => {
    registerUser(form.email, form.username, form.password);
  };
  return isLoggedIn() ? (
    <Navigate to="/" replace />
  ) : (
    <LayoutTwoColumn
      children1={
        <div className="login-info">
          <h1> Rejoignez une communauté soudée et tissez des relations. </h1>
          <p>
            Des centaines d'articles, de conseils, d'astuces, et de personnes
            prêtent à tisser des liens vous attendent.
          </p>
          <img className="login-svg" src={registerSvg} alt="logo" />
        </div>
      }
      children2={
        <div className="login-wrapper">
          <h1>Inscription</h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div>
              <InputText
                label="Email"
                {...register("email")}
                placeholder="Votre adresse mail"
              />
              {errors.email ? <p>{errors.email.message}</p> : ""}
            </div>
            <div>
              <InputText
                label="Pseudo"
                {...register("username")}
                placeholder="Votre pseudo"
              />
              {errors.username ? <p>{errors.username.message}</p> : ""}
            </div>
            <div>
              <InputText
                label="Mot de passe"
                password
                placeholder="Votre mot de passe"
                {...register("password")}
              />
              {errors.password ? <p>{errors.password.message}</p> : ""}
            </div>
            <Button submit label="S'inscrire" color="white" />
          </form>
        </div>
      }
    />
  );
};

export default RegisterPage;
