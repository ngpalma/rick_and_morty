import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import Detail from "./components/Detail";
import Form from "./components/Form";
import RegisterForm from "./components/RegisterForm";
import Favorites from "./components/Favorites";
import { restoreSession } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector((state) => state.token);

  useEffect(() => {
    dispatch(restoreSession());
  }, [dispatch]);

  useEffect(() => {
    const isAuthPage =
      location.pathname === "/" || location.pathname === "/register";
    if (!token && !isAuthPage) {
      navigate("/");
    }
    if (token && location.pathname === "/") {
      navigate("/home");
    }
  }, [token, location.pathname, navigate]);

  const isAuthPage =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <div>
      {token && !isAuthPage && <Nav />}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<Cards />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
