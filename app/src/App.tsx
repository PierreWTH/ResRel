import "./App.css";
import { Outlet } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/useAuth";

function App() {
  return (
    <>
      <UserProvider>
        <ToastContainer hideProgressBar={true}></ToastContainer>
        <Outlet />
      </UserProvider>
    </>
  );
}

export default App;
