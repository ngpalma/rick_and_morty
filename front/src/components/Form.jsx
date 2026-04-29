import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../redux/actions";
import styles from "./styles.module.css";

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Completá todos los campos");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await dispatch(login(email, password));
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Email o contraseña incorrectos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.authPage}>
      <div className={styles.authCard}>
        <h1 className={styles.authTitle}>RICK & MORTY</h1>
        <p className={styles.authSubtitle}>Portal de acceso</p>
        <form className={styles.authForm} onSubmit={handleSubmit}>
          <input
            className={styles.authInput}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <input
            className={styles.authInput}
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          {error && <p className={styles.authError}>{error}</p>}
          <button className={styles.authBtn} type="submit" disabled={loading}>
            {loading ? "Ingresando..." : "Iniciar sesión"}
          </button>
        </form>
        <p className={styles.authSwitch}>
          ¿No tenés cuenta?{" "}
          <Link to="/register" className={styles.authLink}>
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
}
