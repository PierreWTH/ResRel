import './App.css'
import axios from "axios";
import React from 'react'
import { User } from './interfaces/user.interface'

export default function App() {
const [users, setUsers] = React.useState<User[]>([])

axios.get<User[]>('/api/users').then((response) => {
setUsers(response.data)
})


    
  return (
      <div>
        {users.map(user => (
          <li key={user.id}>{user.email}</li>
        ))}
      </div>
  )
}
