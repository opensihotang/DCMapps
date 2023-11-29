import { baseUrl } from "../config/api";
import { Link, NavLink } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import TableRowCategory from "./TableRowCategory";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteCategory, fetchCategory } from "../store/action/actionCreator";

export default function TableCategory() {
    // const { data, loading, refetch } = useFetch(`${baseUrl}/categories`)
    const { category, categoryLoading } = useSelector((state) => state.category)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategory())
    }, [])

    // console.log(data, loading, ">>>>>>>>>>>>data loading");
    const handleDelete = async (categoryId) => {
        try {
            await dispatch(deleteCategory(categoryId))
            // const response = await fetch(`${baseUrl}/categories/${id}`, {
            //     method : "DELETE",
            //     headers : {
            //         "Content-Type": "application/json"
            //     },
            // })
            // if(!response.ok) throw new Error("Data not found")
            // refetch()
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className="text-center" style={{ marginTop: "70px" }}>
                <div>
                    <h2 className="text-center mt-5">List Category</h2>
                </div>
                <div className="d-flex justify-content-end mx-5">
                    <Link to="/addcategory" className="btn btn-success mx-5"> Add Category</Link>
                </div>
                <table className="table table-striped w-75 mx-auto">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoryLoading ? (
                            <tr>
                                <td colSpan={8} className="text-center">
                                    <Loading />
                                </td>
                            </tr>
                        ) : (
                            category.map((dataCategory, index) => (
                                <TableRowCategory key={dataCategory.id} dataCategory={dataCategory} index={index} handleDelete={handleDelete} />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}