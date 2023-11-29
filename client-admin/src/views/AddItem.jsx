import { useNavigate } from "react-router-dom"
import { addItem } from "../store/action/actionCreator"
import FormItem from "../components/FormItem"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"


const AddItem = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (form) => {
        try {
            await dispatch(addItem(form))
            navigate("/item")
            toast.success("Add Item Success")
        } catch (err) {
            toast.error("Error add item")
            console.log(err);
        }
    }

    return (
        <>
            <FormItem handleSubmit={handleSubmit}/>
        </>
    )
}

export default AddItem