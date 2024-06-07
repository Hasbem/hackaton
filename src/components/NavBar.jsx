import { NavLink, useLocation } from "react-router-dom"
import activities from "../hakkton.json" // Assurez-vous d'importer les données JSON
import "../style/NavBar.css"

const Navbar = () => {
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  return (
    <nav className={`navbar ${isHomePage ? "home-nav" : "other-nav"}`}>
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact="true">
            Home
          </NavLink>
        </li>
        <li className="dropdown">
          <span>Activities</span>
          <ul className="dropdown-content">
            {activities.map((activity) => (
              <li key={activity.id}>
                <NavLink to={`/activities/${activity.id}`}>
                  {activity.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
