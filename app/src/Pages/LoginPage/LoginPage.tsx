import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Context/useAuth";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import InputText from "../../Components/InputText/InputText";
import "./LoginPage.css";
import Button from "../../Components/Button/Button";
import { LayoutTwoColumn } from "../../Components/Layout/LayoutTwoColumn/LayoutTwoColumn";
import loginSvg from "../../assets/login.svg";

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
    <LayoutTwoColumn
      children1={
        <div className="login-wrapper">
          <h1>Connexion</h1>
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
                label="Password"
                password
                placeholder="Votre mot de passe"
                {...register("password")}
              />
              {errors.password ? <p>{errors.password.message}</p> : ""}
            </div>
            <div>
              <a href="#">Mot de passe oublié ?</a>
            </div>
            <Button submit label="Se connecter " color="white" />
            <p>
              Pas encore inscrit ? <Link to="/register">S'inscrire</Link>
            </p>
          </form>
        </div>
      }
      children2={
        <div className="login-info">
          <h1> Bon retour parmis nous ! </h1>
          <p>Des nouveautés vous attendent !</p>
          <img className="login-svg" src={loginSvg} alt="logo" />
        </div>
      }
    />
  );
};

export default LoginPage;
