import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addItem, editItem } from "../store/action/actionCreator";
import { fetchCategory } from "../store/action/actionCreator";
import { Link } from "react-router-dom";

const FormItem = ({ handleSubmit, itemById }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { item } = useSelector((state) => state.items)
    const { category, categoryLoading } = useSelector((state) => state.category)
    const [ingredients, setIngredients] = useState(itemById?.ingredient || []);
    const [form, setForm] = useState({
        name: itemById?.name || "",
        description: itemById?.description || "",
        price: itemById?.price || "",
        imgUrl: itemById?.imgUrl || "",
        authorId: itemById?.authorId || "",
        categoryId: itemById?.categoryId || "",
        ingredient: "",
        // createdAtd: new Date(),
        // updatedAt: new Date()
    })
    useEffect(() => {
        dispatch(fetchCategory())
        setForm({
            name: itemById?.name || "",
            description: itemById?.description || "",
            price: itemById?.price || "",
            imgUrl: itemById?.imgUrl || "",
            authorId: itemById?.authorId || "",
            categoryId: itemById?.categoryId || "",
            ingredient: itemById?.ingredient || "",
            createdAtd: new Date(),
            updatedAt: new Date()
        })
    }, [itemById])

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleAddIngredient = () => {
        setIngredients([...ingredients, form.ingredient]);

        setForm({
            ...form,
            ingredient: "",
        });
    };

    const handleRemoveIngredient = (index) => {
        const updatedIngredients = [...ingredients];
        updatedIngredients.splice(index, 1);
        setIngredients(updatedIngredients);
      };

    const handleAddItem = (event) => {
        event.preventDefault();

        const updatedForm = {
            ...form,
            ingredient: ingredients,
        };

        handleSubmit(updatedForm);
    }

    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    //     try {
    //         if(itemId){
    //             await dispatch(editItem(form, itemId))
    //             navigate("/item")
    //         } else {
    //             await dispatch(addItem(form))
    //             navigate("/item")
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    // event.preventDefault()
    // try {
    //     let data = {
    //         ...form,
    //         createdAt: new Date(),
    //         updatedAt: new Date(),
    //         categoryId: 1,
    //     }
    //     const response = await fetch(`${baseUrl}/items`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     const result = await response.json()
    //     // console.log(result);
    // } catch (err) {
    //     console.log(err);
    // }
    // }
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        marginTop: "70px"
    }

    const formStyle = {
        width: "50%",
        padding: "20px",
    }

    return (
        <section style={containerStyle}>
            <form onSubmit={handleAddItem} style={formStyle}>
                <h1>{itemById ? "Update Item" : "Add New Item"}</h1>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={form.name}
                        onChange={(event) => handleChange(event)}
                        required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        name="description"
                        value={form.description}
                        onChange={(event) => handleChange(event)}
                        required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={form.price}
                        onChange={(event) => handleChange(event)}
                        required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image url</label>
                    <input
                        type="text"
                        className="form-control"
                        name="imgUrl"
                        value={form.imgUrl}
                        onChange={(event) => handleChange(event)}
                        required />
                </div>
                {/* <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        name="authorId"
                        value={form.authorId}
                        onChange={(event) => handleChange(event)}
                        required />
                </div> */}
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select
                        className="form-select"
                        name="categoryId"
                        value={form.categoryId}
                        onChange={(event) => handleChange(event)}
                        required
                    >
                        <option value="">-- Select Category --</option>
                        {category.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Ingredients</label>
                    {ingredients.map((ingredient, index) => (
                        <div key={index} className="mb-3 d-flex align-items-center">
                            <input
                                type="text"
                                className="form-control mt-25 w-75"
                                name="ingredient"
                                value={ingredient}
                                onChange={(event) => handleChange(event)}
                                required
                            />
                            <button
                                className="btn btn-danger mx-2"
                                onClick={() => handleRemoveIngredient(index)}
                            >
                                X
                            </button>
                        </div>
                    ))}
                    <div className="d-flex align-items-center">
                        <input
                            type="text"
                            className="form-control mt-25 w-75"
                            name="ingredient"
                            value={form.ingredient}
                            onChange={(event) => handleChange(event)}
                            required
                        />
                        <button
                            className="btn btn-success mx-2"
                            onClick={handleAddIngredient}
                        >
                            Add
                        </button>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">{itemById ? "Update" : "Submit"}</button>
                    <Link to="/" type="submit" className="btn btn-danger ">Cancel</Link>
                </div>
            </form>
        </section>
    )
}

export default FormItem