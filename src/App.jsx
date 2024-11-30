import { useState } from 'react'
import './App.css'
import Login from './component/Auth/Login'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black'>
      {/* <Login/> */}
      <EmployeeDashboard/>
    </div>
  )
}

export default App;