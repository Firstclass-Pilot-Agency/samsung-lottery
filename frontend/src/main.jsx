import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from './components/NavFoo'
import Home from './pages/Home'

import './styles/index.css'
import './styles/home.css'
import './styles/admin.css'
import './styles/responsive.css'
import Dashboard, { CreateUser } from './pages/Admin'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home/> } />
        </Route>
        <Route path='/admin' element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path='createuser' element={<CreateUser/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)


function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

    </>
  )
}


function Admin() {
  return (
    <>
      <Outlet/>
    </>
  )
}