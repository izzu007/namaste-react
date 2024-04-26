import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Error from "./components/Error"
import About from './components/About';
import Contact from './components/Contact';

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ],
        errorElement: < Error/>
    }
    
])
const root = ReactDOM.createRoot (document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)
