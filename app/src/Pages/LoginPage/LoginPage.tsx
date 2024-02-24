import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Context/useAuth";
import { useForm } from "react-hook-form";

type Props = {};

type LoginFormsInputs = {
  username: string;
  password: string;
};

// Validate inputs with Yup
const validation = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = (props: Props) => {
  const { loginUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormsInputs>({ resolver: yupResolver(validation) });

  const handleLogin = (form: LoginFormsInputs) => {
    loginUser(form.username, form.password);
  };
  return (
    <section>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label htmlFor="email">Pseudo</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
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
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Sign in</button>
        <p>
          Pas encore inscrit ? <a href="#">S'inscrire</a>
        </p>
      </form>
    </section>
  );
};

export default LoginPage;
