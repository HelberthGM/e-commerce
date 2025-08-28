import { FaCartShopping} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3 ${styles.stickyNavbar}`}>
        <div className="container">
            <Link className="navbar-brand fw-bold text-uppercase" to="/">E-Commerce</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id='navbarSupportedContent'>
                <NavLink />
                <Link to="/cart" className={`btn btn-dark ms-3 rounded-pill position-relative ${styles.responsiveCart}`}>
                <FaCartShopping />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: '0.85rem', padding: '0.5em 0.65em', backgroundColor: '#6050DC'}}>
                        0
                    </span>
                </Link>
            </div>
        </div>
    </nav>
    
  )
}

export default NavBar