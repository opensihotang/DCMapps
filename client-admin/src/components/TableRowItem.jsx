import { Link } from "react-router-dom";
const TableRowItem = ({ dataItem, index, handleDelete }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{dataItem.name}</td>
            <td>{dataItem.description}</td>
            <td>{dataItem.price}</td>
            <td>
                <img src={dataItem.imgUrl} alt={dataItem.name} className="img-fluid w-50 mx-auto"/>
            </td>
            <td>{dataItem.User.username}</td>
            <td>{dataItem.Category.name}</td>
            <td>
                <Link to={`/edititem/${dataItem.id}`} className="btn btn-primary">Edit</Link>
            </td>
            <td>
                <button className="btn btn-danger" onClick={()=>handleDelete(dataItem.id)}>Delete</button>
            </td>
        </tr>
    );
};

export default TableRowItem