import { useState } from "react";
import validateUser from "../../Helpers/validateUsers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";
import "../../index.css";
const POSTUSER_URL = "http://localhost:3000/users/login";

const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "Debe Ingresar un nombre de Usuario",
    password: "Debe Ingresar una Contraseña",
  });

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validateUser({ ...input, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      username: input.username,
      password: input.password,
    };
    axios
      .post(POSTUSER_URL, userData)
      .then(({ data }) => {
        dispatch(setUserData(data));
        alert("Sesión Iniciada");
        setInput({
          username: "",
          password: "",
        });
        navigate("/home");
      })
      .catch((error) => alert(error?.response?.data?.message));
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>

      <form onSubmit={handleSubmit} className="formDiv">
        <div>
          <label htmlFor="loginUsername">Nombre de Usuario: </label>
          <input
            id="loginUsername"
            type="text"
            name="username"
            value={input.username}
            placeholder="Ingrese Su Nombre de Usuario"
            onChange={handleChange}
          />
          <p>{errors.username ? errors.username : null}</p>
        </div>
        <div>
          <label htmlFor="loginPassword">Contraseña: </label>
          <input
            id="loginPassword"
            type="password"
            name="password"
            value={input.password}
            placeholder="Ingrese Su Contraseña"
            onChange={handleChange}
          />
          <p>{errors.password ? errors.password : null}</p>
        </div>
        <div className="buttonDiv">
          <button
            className="button"
            type="submit"
            value="Enviar"
            disabled={errors.username || errors.password}
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
