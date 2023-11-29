import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const logoStyle = {
        width: '60px',
        height: 'auto',
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {/* <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link> */}
                            <Link to="/" className="navbar-brand" ><img src="https://nos.jkt-1.neo.id/mcdonalds/assets/img/brand/logo_mcd.png" style={logoStyle} alt="" /></Link>
                            <Link to="/menu" className="nav-link">Menu</Link>
                            <Link to="/maintenance" className="nav-link">Promo</Link>
                            <Link to="/maintenance" className="nav-link"><img src="https://mcdonalds.co.id/assets/img/reward/my-reward.svg" className="img-fluid navbar-reward-item" alt="" style={{ height: "30px" }} /></Link>
                            <Link to="/maintenance" className="nav-link"><img src="https://mcdonalds.co.id/assets/img/pokemon-go/img_pkemon-go-7.png" className="img-fluid navbar-reward-item" alt="" style={{ height: "30px" }} /></Link>
                            <Link to="/maintenance" className="nav-link">Dunia Anak</Link>
                            <Link to="/maintenance" className="nav-link">Berita Terkini</Link>
                            <Link to="/maintenance" className="nav-link">Pahlawan di <br /> Sekitar Kita</Link>
                            <Link to="/maintenance" className="nav-link">Makin Kenal <br /> Makin Sayang</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar