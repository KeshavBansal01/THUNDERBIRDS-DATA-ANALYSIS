import logo from './logo.svg';
import './App.css';
import Login from './page/Login/Login';
import { BrowserRouter, RouterProvider, Outlet, Router, Routes,Route } from 'react-router-dom';

import Afterlogin from './page/Afterlogin';

// const router = createBrowserRouter({
//   path:"/",
//   children:[
//     {
//       path:'/',
//       Element: <Login/>
//     }
//   ]

// })

function App() {
  return (
   <BrowserRouter>
   
    
    <Routes>
    <Route path='/' element={<Login/>}/>
      <Route path='/Afterlogin' element={<Afterlogin/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App
