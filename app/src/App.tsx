import "./App.css";
import { Outlet } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/useAuth";
import Navbar from "./Components/Navbars/Navbar";
function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <ToastContainer></ToastContainer>
        <Outlet />
      </UserProvider>
    </>
  );
}

export default App;
