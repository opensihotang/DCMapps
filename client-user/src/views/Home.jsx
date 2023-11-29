import { Link, NavLink } from "react-router-dom";


const Home = () => {
    return (
        <>
            <div className="carousel-inner video-home">
                <div className="carousel-item active">
                    <video className="img-fluid img-desktop d-none d-sm-block" autoPlay muted loop playsInline preload="metadata">
                        <source src="https://nos.jkt-1.neo.id/mcdonalds/home-banners/August2023/hGW3xea1D4odWx0VeXZQ.mp4" />
                    </video>
                </div>
            </div>
            <section className="py-main section-other-promo section-promo-home">
                <div className="container">
                    <div className="heading text-center">
                        <h2 className="title animated fadeInUp delayp2">Promo Menarik</h2>
                    </div>
                    <div className="owl-carousel owl-theme owl-other-promo card-general-list content animated fadeInUp delayp3 owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                            <div className="owl-stage">
                                <div className="owl-item active">
                                    <div className="item">
                                        <Link to="/maintenance" data-id="810" data-name="Happy Meal Squishmallows" data-slot="1" data-slug="happy-meal-squishmallows" className="card card-general">
                                            <div className="img-container">
                                                <img src="https://nos.jkt-1.neo.id/mcdonalds/promos/August2023/qxTGXmTed6OogIWxy4zV.png" className="img-fluid" />
                                            </div>
                                            <div className="card-body">
                                                <h5>Happy Meal Squishmallows</h5>
                                                <div className="text-truncate-multiline">Setiap mainan memiliki playlist musik yang eksklusif. Nikmati musiknya dengan scan QR pada kartu terpisah.</div>
                                                <p className="exp-date">
                                                    <img src="https://nos.jkt-1.neo.id/mcdonalds/assets/img/icon/ic_calendar_red.svg" className="img-fluid" /> Berlaku
                                                    hingga 14 September 2023
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="owl-item active">
                                    <div className="item">
                                        <Link to="/maintenance" data-id="820" data-name="My Mekdi Date" data-slot="2" data-slug="my-mekdi-date" className="card card-general">
                                            <div className="img-container">
                                                <img src="https://nos.jkt-1.neo.id/mcdonalds/promos/August2023/XSpFwhtVRxQYknpybzxu.png" className="img-fluid" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home