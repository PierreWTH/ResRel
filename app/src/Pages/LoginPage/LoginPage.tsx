import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Context/useAuth";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import InputText from "../../Components/InputText/InputText";
import "./LoginPage.css";

type Props = {};

type LoginFormsInputs = {
  email: string;
  password: string;
};

// Validate inputs with Yup
const validation = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = (props: Props) => {
  const { loginUser, isLoggedIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormsInputs>({ resolver: yupResolver(validation) });

  const handleLogin = (form: LoginFormsInputs) => {
    loginUser(form.email, form.password);
  };
  return isLoggedIn() ? (
    <Navigate to="/" replace />
  ) : (
    <section className="login-wrapper">
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <InputText label="Email" {...register("email")} />
          {errors.email ? <p>{errors.email.message}</p> : ""}
        </div>
        <div>
          <InputText label="Password" password {...register("password")} />
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
