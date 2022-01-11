import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import BodyDataForm from "./BodyDataForm";
import TrackFitness from "./TrackFitness";
function RoutesPage() {
  return (
    <Router>
      <nav
        class="navbar navbar-expand-lg navbar-dark px-md-5"
        Style="background-color: #041C32;"
      >
        <div class="container-fluid">
          <NavLink className={() => "navbar-brand fs-2 fw-bolder "} to="/track-fitness">
            Fathom
          </NavLink>
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
          <div
            class="collapse navbar-collapse justify-content-end mt-3 mt-lg-0"
            id="navbarNav"
          >
            <ul class="navbar-nav mb-2 mb-lg-0 nav-pills">
              <li class="nav-item mx-3 text-center">
                <NavLink
                  to="/track-fitness"
                  className={(navData) =>
                    navData.isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Track Fitness
                </NavLink>
              </li>
              <li class="nav-item mx-3 text-center">
                <NavLink
                  to="/data-form"
                  className={(navData) =>
                    navData.isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Data Form
                </NavLink>
              </li>
              <li class="nav-item mx-3 text-center">
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
        <Route path="/data-form" element={<BodyDataForm />}></Route>
        <Route path="/" element={<Navigate replace to="/track-fitness" />}></Route>
      </Routes>
    </Router>
  );
}

export default RoutesPage;
