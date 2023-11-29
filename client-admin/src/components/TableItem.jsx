import { baseUrl } from "../config/api"
import { Link, NavLink } from "react-router-dom"
// import useFetch from "../hooks/useFetch"
import Loading from "./Loading"
import TableRowItem from "./TableRowItem"
import { deleteItem, fetchItem } from "../store/action/actionCreator"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
// import { access_token } from "../store/action/actionCreator"


export default function TableItem() {
  const { items, itemsLoading } = useSelector((state) => state.items)
  const { dataUser } = useSelector((state) => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchItem())
  }, [dispatch])

  const handleDelete = async (itemId) => {
    try {
      await dispatch(deleteItem(itemId))
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="text-center" style={{ marginTop: "70px" }}>
        <div className="text-center">
          <h2>List Item</h2>
        </div>
        <div className="d-flex justify-content-end mx-5">
          <Link to="/additem" className="btn btn-success mx-5"> Add Item</Link>
        </div>
        <table className="table table-striped w-75 mx-auto">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image Url</th>
              <th>Author Name</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {itemsLoading ? (
              <tr>
                <td colSpan={8} className="text-center">
                  <Loading />
                </td>
              </tr>
            ) : (
              items.map((dataItem, index) => (
                <TableRowItem key={dataItem.id} dataItem={dataItem} index={index} handleDelete={handleDelete} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}