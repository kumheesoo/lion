// import { Suspense } from "react";
// import {createBrowerRouter} from "react-router-dom";
// import Test from "./page/test";
// const Loading = 'loading';
// const router = createBrowerRouter([
//     {
//         path: "test",
//         element:
//                 <Test/>
             

//     }
// ])

import { Outlet, createBrowserRouter } from "react-router-dom"

import { Suspense, lazy } from "react"

const Login = lazy(() => import("./page/Login"))

function Loading() {
  return <div>로딩중입니다.</div>
}

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loading />}>
        <header>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "coral",
            }}
          >
            헤더
          </h1>
        </header>
        <body>
          <Outlet />
        </body>
      </Suspense>
    ),
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
    ],
  },
])

export default router

