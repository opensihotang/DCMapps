import { Link } from "react-router-dom";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchItem } from "../store/action/actionCreator";
import { CardItem } from "./ItemCard";

export default function Items() {
    const { items, itemsLoading } = useSelector((state) => state.items)
    console.log(items, "ini di component");
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchItem())
    }, [dispatch])

    return (
        <>
            <div>
                <h1>Menu</h1>
                {itemsLoading ? (
                     <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
                     <Loading />
                 </div>
                ) : (
                    <div className="container">
                        <div className="d-flex flex-row justify-content-center gap-5 flex-wrap">
                            {items.map((item) => (
                                <CardItem key={item.id} item={item} />
                            ))}
                        </div>

                    </div>
                )}
            </div>
        </>
    )
}
