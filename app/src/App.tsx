import "./App.css";
import { Outlet } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/useAuth";
import Navbar from "./Components/Common/Navbar";
import { LayoutPadding } from "./Components/Layout/LayoutPadding/LayoutPadding";
function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Outlet />
        <ToastContainer />
      </UserProvider>
    </>
  );
}

export default App;
