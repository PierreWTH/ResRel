import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@context/useAuth";
import { useForm } from "react-hook-form";
import { Navigate, Link } from "react-router-dom";
import { LayoutTwoColumn } from "@components/Layout/LayoutTwoColumn";
import InputText from "@components/Common/Inputs/InputText";
import Button from "@components/Common/CommonButton";
import registerSvg from "@assets/register.svg";
import styled from "styled-components";

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
        <RegisterInfo>
          <h1> Rejoignez une communauté soudée et tissez des relations. </h1>
          <p>
            Des centaines d'articles, de conseils, d'astuces, et de personnes
            prêtent à tisser des liens vous attendent.
          </p>
          <Image src={registerSvg} alt="logo" />
        </RegisterInfo>
      }
      children2={
        <RegisterWrapper>
          <RegisterTitle>Inscription</RegisterTitle>
          <RegisterForm onSubmit={handleSubmit(handleLogin)}>
            <InputText
              label="Email"
              {...register("email")}
              placeholder="Votre adresse mail"
            />
            {errors.email ? <p>{errors.email.message}</p> : ""}

            <InputText
              label="Pseudo"
              {...register("username")}
              placeholder="Votre pseudo"
            />
            {errors.username ? <p>{errors.username.message}</p> : ""}

            <InputText
              label="Mot de passe"
              password
              placeholder="Votre mot de passe"
              {...register("password")}
            />
            {errors.password ? <p>{errors.password.message}</p> : ""}
            <p>
              Déja inscrit ?
              <RegisterLink to="/login"> Se connecter</RegisterLink>
            </p>
            <Button submit label="S'inscrire" />
          </RegisterForm>
        </RegisterWrapper>
      }
    />
  );
};

const RegisterWrapper = styled.div`
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

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  width: 100%;
`;

const RegisterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 50px;
`;

const RegisterTitle = styled.h1`
  font-weight: 500;
  font-size: 2.5rem;
  color: white;
`;

const Image = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
`;

const RegisterLink = styled(Link)`
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

export default RegisterPage;
