import React from 'react'
import Navbars from '../components/Navbars'
import Home from './Home'
import Aboutus from './Aboutus'
import Jobs from './Jobs'
import OurMenu from './OurMenu'
import { createBrowserRouter , RouterProvider , Route } from'react-router-dom'

const List = createBrowserRouter([
    {
        path:"/",
        
    element:<Navbars/>,  
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/Aboutus",
            element:<Aboutus/>
        },
        {
            path:"/OurMenu",
            element:<OurMenu/>
        },
        {
            path:"/Jobs",
            element:<Jobs/>
        },
    ]

    }
])

const Layout2 =() =>{
    return (
        <div>
            <RouterProvider router={List}></RouterProvider>
        </div>
    )
}

export default Layout2