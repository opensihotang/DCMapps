import { useNavigate, useParams } from "react-router-dom"
import { editItem, fetchItemById } from "../store/action/actionCreator"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import FormItem from "../components/FormItem"
import { toast } from "react-toastify"


const EditItem = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { itemId } = useParams()
    const { item, itemLoading } = useSelector((state) => state.items)

    useEffect(() => {
        dispatch(fetchItemById(itemId))
    }, [itemId])

    const handleSubmit = async (form) => {
        try {
            await dispatch(editItem(form, itemId))
            toast.success("edited success")
            navigate("/item")
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            < FormItem handleSubmit={handleSubmit} itemById={item}/>
        </>
    )
}

export default EditItem