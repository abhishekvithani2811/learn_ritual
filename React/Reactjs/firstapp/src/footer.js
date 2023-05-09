import { Outlet, Link } from "react-router-dom";
function Footer() {
    return (
        <>
            <section className="footer-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-8 col-xl-3 col-sm-6 d-flex justify-content-center">
                            <div className="widget footer-about mb-5 mb-lg-0 ">
                                <h5 className="widget-title text-gray">About us</h5>
                                <ul className="list-unstyled footer-info">
                                    <li>
                                        <span>Ph:</span>+(68) 345 5902
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        <ul>
                                        abhishekvithani2811@gmail.com
                                        </ul>
                                        <ul>
                                        digeeshmordiya@gmail.com
                                        </ul>
                                    </li>
                                    <li>
                                        <span>Location:</span> 102 Silver Sky, Desai Nagar,Bhavnagar -
                                        364003
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-btm">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-xl-6 col-lg-4 col-md-12">
                                <div className="footer-logo text-lg-left text-center mb-4 mb-lg-0">
                                   
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-8 col-md-12">
                                <div className="copyright">
                                    <p>© Copyright Learn Ritual</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="fixed-btm-top">
                <a href="#top-header" className="js-scroll-trigger scroll-to-top">
                    <i className="fa fa-angle-up" />
                </a>
            </div>
            <Outlet />
        </>
    );
}
export default Footer; 