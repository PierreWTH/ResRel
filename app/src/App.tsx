import './App.css'
import axios from "axios";
import React from 'react'

export default function App() {
  const [users, setUsers] = React.useState([])
  
  React.useEffect(() => {
    axios.get('api/users').then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);

  if (!users) return null;
    
  return (
      <div>
        <ul>
          {users.map(user => (
          <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      </div>
  )
}
