// import logo from './logo.svg';
// import './App.css';
// import {RouterProvider,createBrowserRouter} from 'react-router-dom'
// import Tester from './page/tester';
// import Counter from './componets/counter';

// const router = createBrowserRouter([
//   {path:'/',element:<Tester/>},//라우트 객체이다.
//   // {path:'/products',element:<ProductsPage/>}
// ]);
// function App() {
//   return (
   
//     <>
//     <Counter/>
//     </>
    
//   );
// }

// export default App;


import React, { useState } from "react"
import { RouterProvider } from "react-router-dom"
import router from "./router"

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App