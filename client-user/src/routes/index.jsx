import { createBrowserRouter, redirect } from "react-router-dom"
import BaseLayout from "../components/BaseLayout"
import Home from "../views/Home"
import BannerMaintenance from "../views/BannerMaintenance"
import Menu from "../components/menu"
import DetailMenu from "../components/DetailMenu"

const router = createBrowserRouter([
    {
        path:"/",
        element : <BaseLayout/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "/menu",
                element : <Menu/>
            },
            {
                path : "/menu/:id",
                element : <DetailMenu/>
            },
            {
                path : "maintenance",
                element : <BannerMaintenance/>
            }
        ]
    }
])

export default router