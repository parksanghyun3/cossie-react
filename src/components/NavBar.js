import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">Home</Link>
        <ul className="navbar-nav" style={{ flexDirection: "row" }}>
        <li className="nav-item me-2">
            <NavLink
              className="nav-link"
              activeClassName="active"
              aria-current="page"
              to="/admin">
              Admin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              aria-current="page"
              to="/blogs">
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}