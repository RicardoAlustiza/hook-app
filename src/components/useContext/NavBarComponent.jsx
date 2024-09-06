import { Link, NavLink } from 'react-router-dom';

export const NavBarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">useContext</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className='nav-item'>
              <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                to="/">
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                to="/about">
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                to="/login">
                Log In
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
