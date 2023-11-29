import { useEffect } from "react"
import { fetchItemDetail } from "../store/action/actionCreator"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Loading from "./Loading"
import { Link } from "react-router-dom"

export default function DetailMenu() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { item, itemLoading } = useSelector((state) => state.items)
    // console.log(item, "ini di halaman detail");

    useEffect(() => {
        dispatch(fetchItemDetail(id))
    }, [id])

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="detail-card">
                {itemLoading ? (
                    // Tampilkan indikator loading di sini
                    <Loading />
                ) : (
                    <>
                        <div>
                            <div>
                                <Link to="/menu" href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                </svg>back</Link>
                            </div>
                            <img src={item.imgUrl} className="img-fluid w-100" alt="..." />
                            <h5>Ingredients :</h5>
                            <ul>
                                {item.Ingredients && item.Ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient.name}</li>
                                ))}
                            </ul>
                            {/* <h5>Authors :</h5> */}
                            {/* <p>{item.User.username}</p> */}
                            {/* <p>{item && item.User.username ? item.User.username : 'Author not available'}</p> */}
                        </div>
                        <div className="details">
                            <h2>{item.name}</h2>
                            <div>
                                <p>{item.description} </p>
                                <h5>Category</h5>
                                {item && item.Category ? item.Category.name : 'Category not available'}
                                <h5>Harga</h5>
                                <p>Hanya Rp.{item.price}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}