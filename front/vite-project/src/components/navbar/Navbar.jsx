import styles from "./Navbar.module.css";
import logo from "../../assets/barMoe.png";
import { Link /* useLocation */ } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  /*  const { pathname } = useLocation(); */

  const loggin = useSelector((state) => state.actualUser.userData.loggin);
  return (
    <div className={styles.navbarDiv}>
      <div className={styles.logDiv}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.menuDiv}>
        <Link to="/home">
          <span>Inicio</span>
        </Link>
        {loggin && (
          <Link to="/appointments">
            <span>Reservas</span>
          </Link>
        )}

        <Link to="/about">
          <span>Sobre Nosotros</span>
        </Link>
        {loggin && (
          <Link to="/appointmentform">
            <span>Reservar</span>
          </Link>
        )}
      </div>
      <div className={styles.registerDiv}>
        <Link to="/register">
          <span>Registro</span>
        </Link>
        <Link to="/login">
          <span>Iniciar Sesión</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
