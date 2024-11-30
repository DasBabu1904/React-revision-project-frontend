import { useState } from 'react'
import './App.css'
import Login from './component/Auth/Login'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'
function App() {
  const [user, setUser] = useState(null)
  const handleLogin = (email, password) => {
    if (email == "admin@admin.com" && password == "123") {
      setUser("admin")
    } else if (email == "alice@example.com" && password == "123") {
      setUser("employee")
    }
    else {
      alert("Invalid data")
    }
  }

  return (
    <div className='bg-black justify-center'>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}

    </div>
  )
}

export default App;