import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/about'
import Layout from './layout'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {path:"About",
//       element:<About/>

//       },
//       {
//         path:"Contact",
//         element:<Contact/>
//       }
//     ]
//   }

// ])
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout/>} path='/'>
      <Route element={<Home/>} path=''></Route>
      <Route element={<About/>} path='About'></Route>
      <Route element={<Contact/>} path='Contact'></Route>
      <Route element={<User/>} path='User/:id'></Route>
      <Route
        loader={githubInfoLoader}
       element={<Github/>} path='Github'></Route>      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
