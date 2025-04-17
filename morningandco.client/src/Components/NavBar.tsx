import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Menu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/features">Locations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/pricing">Reservations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/pricing">Photo Galery</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;