import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Header from './components/Auth/other/header'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './components/Utils/LocalStorage'
import { AuthConext } from './components/context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthConext);


//   useEffect(() => {
//     setLocalStorage();
// },[])

  // useEffect(() => {
  //   // Listen for changes in local storage
  //   const handleStorageChange = () => {
  //     const loggedInUser = localStorage.getItem('loggedInUser');
  //     if (loggedInUser) {
  //       const userData = JSON.parse(loggedInUser);
  //       setUser(userData.role);
  //       setLoggedInUserData(userData.data);
  //     }
  //   };
  
  //   // Attach event listener
  //   window.addEventListener('storage', handleStorageChange);
  
  //   // Run initially to load data if it exists
  //   handleStorageChange();
  
  //   // Cleanup the event listener
  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange);
  //   };
  // }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, [])

  const handleLogin = (email, password) => {

    if (authData && authData.admin.find((a) => email == a.email && password == a.password)) {
      const admin = authData.admin.find((a) => email == a.email && password == a.password);
      if (admin) {
        setUser('admin');
        setLoggedInUserData(admin)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }));
      }
    }
    else if (authData && authData.employees.find((e) => email == e.email && password == e.password)) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      }
    }
    else
    {
      alert('Invalid Credentials');
    }


  }



  return (
    <div>
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser = {setUser} data = {loggedInUserData} /> : (user == 'employee' ? <EmployeeDashboard changeUser = {setUser} data ={loggedInUserData} /> : null)}

    </div>
  )
}

export default App
