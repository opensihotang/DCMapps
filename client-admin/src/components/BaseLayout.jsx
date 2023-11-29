import { Outlet } from "react-router";
import Navbar from "./Navbar";
import {toast, ToastContainer} from 'react-toastify'


export default function () {
    return (
        <>
            <Navbar />
            <Outlet />
            <ToastContainer/>
        </>
    )
}