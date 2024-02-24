import { useNavigate } from "react-router-dom";
import { UserProfile } from "../Types/User";
import React from "react";
import { createContext, useEffect, useState } from "react";
import { registerAPI, loginAPI } from "../Services/AuthService";
import { toast } from "react-toastify";
import axios from "axios";

// Define the authentication context

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (email: string, username: string, password: string) => void;
  loginUser: (email: string, password: string) => void;
  logoutUser: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

// In typescript we must pass an object to CreateContext

const UserContext = createContext<UserContextType | null>(
  {} as UserContextType
);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = "Bearer" + token;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (
    email: string,
    username: string,
    password: string
  ) => {
    await registerAPI(email, username, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res?.data.token);
          const UserObj = {
            email: res?.data.email,
            username: res?.data.username,
          };
          localStorage.setItem("user", JSON.stringify(UserObj));
          setToken(res?.data.token);
          setUser(UserObj!);
          toast.success("Connexion réussie !");
          // Redirect user
          navigate("/home");
        }
      })
      .catch((e) => toast.warning("Error: " + e));
  };

  const loginUser = async (email: string, password: string) => {
    await loginAPI(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res?.data.token);
          const UserObj = {
            email: res?.data.email,
          };
          localStorage.setItem("user", JSON.stringify(UserObj));
          setToken(res?.data.token);
          setUser(UserObj!);
          toast.success("Login success ! ");
          // Redirect user
          navigate("/");
        }
      })
      .catch((e) => toast.warning("Error: " + e));
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        user,
        token,
        logoutUser,
        isLoggedIn,
        registerUser,
      }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext)!;
