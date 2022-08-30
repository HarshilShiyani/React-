import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar fixed-top navbar-dark navbar-expand-lg pt-0 ">
        <div class="container-fluid bg-dark">
          <div class="logofull">
            <Link to="home">
              <i
                class="fa-brands fa-react text-white fs-1 ps-5"
                href="home"
              ></i>
            </Link>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item me-5">
                <Link to="home" class="nav-link fs-3 text-white text-center">
                  Home
                </Link>
              </li>

              <li class="nav-item me-5">
                <Link
                  to="/student"
                  class="nav-link fs-3 text-white text-center"
                >
                  Student
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link
                  to="/product"
                  class="nav-link fs-3 text-white text-center"
                >
                  Product
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link
                  to="/aboutus"
                  class="nav-link fs-3 text-white text-center"
                >
                  About Us
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link
                  to="/contactus"
                  class="nav-link fs-3 text-white text-center"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
