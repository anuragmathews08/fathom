import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import FormPage from "./FormPage";
import TrackFitness from "./TrackFitness";
function RoutesPage() {
  return (
    <Router>
      <nav
        className="navbar navbar-expand-lg navbar-dark px-md-5"
        Style="background-color: #041C32;"
      >
        <div className="container-fluid">
          <NavLink className={() => "navbar-brand fs-2 fw-bolder "} to="/track-fitness">
            Fathom
          </NavLink>
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
          <div
            className="collapse navbar-collapse justify-content-end mt-3 mt-lg-0"
            id="navbarNav"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 nav-pills">
              <li className="nav-item mx-3 text-center">
                <NavLink
                  to="/track-fitness"
                  className={(navData) =>
                    navData.isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Track Fitness
                </NavLink>
              </li>
              <li className="nav-item mx-3 text-center">
                <NavLink
                  to="/data-form"
                  className={(navData) =>
                    navData.isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Data Form
                </NavLink>
              </li>
              <li className="nav-item mx-3 text-center">
              <NavLink
                  to="/logout"
                  className={(navData) =>
                    navData.isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/track-fitness" element={<TrackFitness />}></Route>
        <Route path="/data-form" element={<FormPage />}></Route>
        <Route path="/" element={<Navigate replace to="/track-fitness" />}></Route>
      </Routes>
    </Router>
  );
}

export default RoutesPage;
