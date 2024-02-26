import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Context/useAuth";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

type Props = {};

type RegisterFormsInputs = {
  email: string;
  username: string;
  password: string;
};

const validation = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
  username: Yup.string().required("Username is required"),
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
    <section>
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="username"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email ? <p>{errors.email.message}</p> : ""}
        </div>
        <div>
          <label htmlFor="username">Pseudo</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            {...register("username")}
          />
          {errors.username ? <p>{errors.username.message}</p> : ""}
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" {...register("password")} />
          {errors.password ? <p>{errors.password.message}</p> : ""}
        </div>
        <div>
          <a href="#">Déja un compte ? Se connecter</a>
        </div>
        <button type="submit">S'inscrire</button>
        <p>
          Pas encore inscrit ? <a href="#">S'inscrire</a>
        </p>
      </form>
    </section>
  );
};

export default RegisterPage;
