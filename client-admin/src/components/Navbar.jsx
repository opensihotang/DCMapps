import { Link, NavLink, useNavigation } from "react-router-dom";
import { logoutUser } from "../store/action/actionCreator";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigation()

  const handleLogout = ()=>{
    dispatch(logoutUser())
    toast.success("Logout success")
    navigate("/login")
  }
  const navbarStyle = {
    position: "fixed",
    top:0
  }
  const logoStyle = {
    width: '50px',
    height: 'auto',
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary w-100" style={navbarStyle}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" ><img src="https://nos.jkt-1.neo.id/mcdonalds/assets/img/brand/logo_mcd.png" style={logoStyle} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/* <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link> */}
              <Link to="/item" className="nav-link">Item</Link>
              <Link to="/category" className="nav-link">Category</Link>
              <Link to="/register" className="nav-link">Register</Link>
              <Link to="/login" className="nav-link" onClick={handleLogout}>Logout</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar