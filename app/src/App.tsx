import './App.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './Context/userAuth';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ToastContainer />
      </UserProvider>
    </div>
  );
}

export default App;