import { createBrowserRouter, redirect } from "react-router-dom";
import TableItem from "../components/TableItem";
import FormLogin from "../views/Login";
import FormRegister from "../views/register";
import TableCategory from "../components/TableCategory";
import BaseLayout from "../components/BaseLayout";
import FormCategory from "../components/FormCategory";
import FormItem from "../components/FormItem";
import EditItem from "../views/EditItem";
import AddItem from "../views/AddItem";
import Home from "../views/Home";




const router = createBrowserRouter([
    {
        path: "/login",
        loader: () => {
            if (localStorage.getItem("access_token")) throw redirect("/");
            return null;
        },
        element: <FormLogin />
    },
    {
        path: "/register",
        element: <FormRegister />
    },
    {
        path: "/",
        loader: () => {
            if (!localStorage.getItem("access_token")) throw redirect("/login");
            return null;
        },
        element: <BaseLayout />,
        children: [
            {
                path : "",
                element : <TableItem/>
            },
            {
                path: "item",
                element: <TableItem />
            },
            {
                path: "category",
                element: <TableCategory />
            },
            {
                path: "addcategory",
                element: <FormCategory />
            },
            {
                path: "additem",
                element: <AddItem />
            },
            {
                path: "edititem/:itemId",
                element: <EditItem />
            },
            {
                path : "editcategory/:categoryId",
                element : <FormCategory />
            }
        ]
    },
])

export default router