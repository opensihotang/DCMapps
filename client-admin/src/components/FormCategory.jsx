import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, editCategory } from "../store/action/actionCreator";
import { Link } from "react-router-dom";


export default function FormCategory() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { categoryId } = useParams()
    const { category } = useSelector((state) => state.category)
    // console.log(category);
    const [ dataCategory, setDataCategory ] = useState({
        name: "",
        createdAt: "",
        updatedAt: ""
    })

    useEffect(() => {
        if(categoryId){
            const categoryToEdit = category.find((category) => category.id === +categoryId)
            if(categoryToEdit){
                setDataCategory(categoryToEdit)
            }
        // console.log(categoryToEdit);
        }
    }, [categoryId, category])

    const handleChange = (event) => {
        setDataCategory({
            ...dataCategory,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            if(categoryId){
                await dispatch(editCategory(dataCategory, categoryId))
                navigate("/category")
            } else {
                await dispatch(addCategory(dataCategory))
                navigate("/category")
            }
        } catch(err){
            console.log(err);
        }
        // try {
        //     const response = await fetch(`${baseUrl}/categories`, {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(data)
        //     })
        //     const result = await response.json()
        //     navigate("/category")
        // } catch (err) {
        //     console.log(err);
        // }
    }
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
    }

    const formStyle = {
        width: "50%",
        padding: "20px",
    }

    return (
        <section style={containerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <h1> { categoryId ? "Update Category" : "Add new category"}</h1>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={dataCategory.name}
                        onChange={(event) => handleChange(event)} />
                </div>
                <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">{ categoryId ? "Update" : "Submit"}</button>
                    <Link to="/" type="submit" className="btn btn-danger ">Cancel</Link>
                </div>
            </form>
        </section>
    )
}