import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              className="linkStyle"
              to="/"
            >
              HotelAccesRock
            </Link>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#"></a>
              <Link className="linkStyle nav-link" to="/habitacion">
                Habitacion
              </Link>

              <Link className="linkStyle nav-link" to="/reserva ">
                Reserva
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
