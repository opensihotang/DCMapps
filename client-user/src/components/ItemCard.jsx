import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

export function CardItem({ item }) {
    return (
        <>
            <div className="col-6 col-md-3">
                <Link to={`/menu/${item.id}`}>
                    <div className="card">
                        <img src={item.imgUrl} className="card-img-top w-100" alt="image" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}