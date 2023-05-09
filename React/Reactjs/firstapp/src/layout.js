import { Outlet, Link } from "react-router-dom";
function Layout() {
  return (
    <div>
      <header>
        {/* Main Menu Start */}
        <div className="site-navigation main_menu menu-style-2" id="mainmenu-area">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/home">
                {/* OUR LOGO  */}
                <img
                  src="assets/images/default.png"
                  alt="Eduhash"
                  className="img-fluid"
                />
              </Link>
              {/* Toggler */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarMenu"
                aria-controls="navbarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="fa fa-bars" />
              </button>
              {/* Collapse */}
              <div className="collapse navbar-collapse" id="navbarMenu">
                <ul className="navbar-nav mx-auto">
                  {/* <li class="nav-item dropdown">
                      <a class="nav-link " href="#" id="navbar3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Home<i class="fa fa-angle-down"></i>
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbar3">
                           <a class="dropdown-item " href="index.html">
                              Home 1
                          </a>
                          
                      </div>
                  </li> */}
                  <li className="nav-item active">
                    <Link className="nav-link" to="/home">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    {/* <a class="nav-link dropdown-toggle" href="#" id="navbar3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Courses<i class="fa fa-angle-down"></i>
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbar3">
                           <a class="dropdown-item " href="course-grid.html">
                              Course Style 1
                          </a>
                          
                      </div> */}
                  </li>
                  <li className="nav-item dropdown"></li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/religion">
                      Religion <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown"></li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/language">
                      Demo Course <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown"></li>
                  <li className="nav-item ">
                    <Link to="/aboutus  " className="nav-link js-scroll-trigger">
                      About us
                    </Link>
                  </li>

                </ul>
                
                {/* <div className="header-login ml-3">
                  <Link to="/login"
                    className="btn btn-solid-border btn-sm "
                  >
                    User Login
                  </Link>
                </div>
                <div className="header-register ml-3">
                  <a
                    href="/register"
                    className="btn btn-main btn-sm"
                  >
                    User Register
                  </a>
                </div> */}
                {/* <div className="header-login ml-3">
                  <Link to="/login_teacher"
                    className="btn btn-solid-border btn-sm "
                  >
                    Teacher Login
                  </Link>
                </div>
                <div className="header-register ml-3">
                  <Link to="/register_teacher"
                    className="btn btn-main btn-sm"
                  >
                    Teacher Register
                  </Link>
                </div> */}
                
                  {/* Example single danger button */}
                  <div className="btn-group mx-3 ">
                    <button
                      type="button"
                      className="btn shadow btn-solid-border  btn-sm dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      User
                    </button>
                    <div className="dropdown-menu border-white">
                      <Link to="/login"
                        className="btn btn-main btn-sm "
                      >
                        Login
                      </Link>
                      <Link to="/register"
                        className="btn btn-main btn-sm mt-2 "
                      >
                        Ragister
                      </Link>
                      <Link to="/changepassword"
                        className="btn btn-main btn-sm  mt-2"
                      >
                        Change Password
                      </Link>

                    </div>
                  </div>
{/* //teacher */}
                  <div className="btn-group mx-3 btn-main">
                    <button
                      type="button"
                      className="btn shadow rounded btn-main btn-sm dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Teacher
                    </button>
                    <div className="dropdown-menu border-white">
                      <Link to="/login_teacher"
                        className="btn btn-main btn-sm "
                      >
                        Login
                      </Link>
                      <Link to="/register_teacher"
                        className="btn btn-main btn-sm mt-2 rounded-top "
                      >
                        Ragister
                      </Link>
                      <Link to="/changepassword_teacher "
                        className="btn btn-main btn-sm mt-2"
                      >
                        Change Password
                      </Link>

                    </div>
                  </div>
                

              </div>
              {/* / .navbar-collapse */}
            </div>
            {/* / .container */}
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  )
}
export default Layout; 