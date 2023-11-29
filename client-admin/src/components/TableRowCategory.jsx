import { Link } from 'react-router-dom'

const TableRowCategory = ({ dataCategory, index, handleDelete }) => {
    return (
        <tr>
            <td>{index+1}</td>
            <td>{dataCategory.name}</td>
            <td>
                <Link to={`/editcategory/${dataCategory.id}`} className="btn btn-primary">Edit</Link>
                <button className="btn btn-danger mx-2" onClick={() => handleDelete(dataCategory.id)}>Delete</button>
            </td>
        </tr>
    )
}

export default TableRowCategory