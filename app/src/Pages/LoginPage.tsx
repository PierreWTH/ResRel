import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@context/useAuth";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import InputText from "@components/Common/Inputs/InputText";
import Button from "@components/Common/CommonButton";
import { LayoutTwoColumn } from "@components/Layout/LayoutTwoColumn";
import loginSvg from "@assets/login.svg";
import styled from "styled-components";

type Props = {};

type LoginFormsInputs = {
  email: string;
  password: string;
};

// Validate inputs with Yup
const validation = Yup.object().shape({
  email: Yup.string().required("Veuillez renseigner un email."),
  password: Yup.string().required("Veuillez renseigner un mot de passe."),
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
        <LoginWrapper>
          <LoginTitle>Connexion</LoginTitle>
          <LoginForm onSubmit={handleSubmit(handleLogin)}>
            <InputText
              label="Email"
              {...register("email")}
              placeholder="Votre adresse mail"
            />
            {errors.email ? <p>{errors.email.message}</p> : ""}

            <InputText
              label="Password"
              password
              placeholder="Votre mot de passe"
              {...register("password")}
            />
            {errors.password ? <p>{errors.password.message}</p> : ""}

            <div>
              <LoginLink to="">Mot de passe oublié ?</LoginLink>
            </div>
            <Button submit label="Se connecter " />
            <p>
              Pas encore inscrit ?{" "}
              <LoginLink to="/register">S'inscrire</LoginLink>
            </p>
          </LoginForm>
        </LoginWrapper>
      }
      children2={
        <LoginInfo>
          <h1> Bon retour parmis nous ! </h1>
          <p>Des nouveautés vous attendent !</p>
          <Image src={loginSvg} alt="logo" />
        </LoginInfo>
      }
    />
  );
};

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: white;
  width: 100%;
  height: 100%;
  background-color: #6b63ff;
  padding: 30px;
  box-sizing: border-box;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  width: 100%;
`;

const LoginInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 50px;
`;

const LoginTitle = styled.h1`
  font-weight: 500;
  font-size: 2.5rem;
  color: white;
`;

const Image = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
`;

const LoginLink = styled(Link)`
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

export default LoginPage;
