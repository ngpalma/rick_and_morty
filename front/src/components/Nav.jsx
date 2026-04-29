import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions";
import styles from "./styles.module.css";

export default function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className={styles.nav}>
      <Link to="/home" className={styles.navBrand}>
        <span className={styles.navTitle}>RICK & MORTY</span>
      </Link>
      <div className={styles.navLinks}>
        <Link to="/home" className={styles.navLink}>
          Personajes
        </Link>
        <Link to="/favorites" className={styles.navLink}>
          Favoritos
        </Link>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}
