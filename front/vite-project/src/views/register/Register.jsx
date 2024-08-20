import axios from "axios";
const POSTUSER_URL = "http://localhost:3000/users/register";
import { useState } from "react";
import validateUser from "../../Helpers/validateUsers";
import "../../index.css";

function FormRegister() {
  const initialState = {
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    confirmPassword: "",
  };
  const [input, setInput] = useState(initialState);

  const [errors, setErrors] = useState(initialState);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validateUser({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name: input.name,
      email: input.email,
      birthdate: input.birthdate,
      nDni: input.nDni,
      username: input.username,
      password: input.password,
    };
    axios
      .post(POSTUSER_URL, userData)
      .then(({ data }) => {
        console.log(data);
        alert(data.message);
        setInput(initialState);
      })
      .catch((error) => alert(error.message));
  };

  const handleReset = (event) => {
    event.preventDefault();
    setInput(initialState);
  };

  return (
    <div>
      <h1>Registrese</h1>
      <form onSubmit={handleSubmit} className="formDiv">
        <div>
          <label htmlFor="RegisterName">Nombre: </label>
          <input
            id="RegisterName"
            type="text"
            name="name"
            value={input.name}
            placeholder="Ingrese Su Nombre..."
            onChange={handleChange}
          />
          <p>{errors.name ? errors.name : null}</p>
        </div>
        <div>
          <label htmlFor="RegisterEmail">Correo Electrónico: </label>
          <input
            id="RegisterEmail"
            type="text"
            name="email"
            value={input.email}
            placeholder="Ingrese Su Correo Electrónico..."
            onChange={handleChange}
          />
          <p>{errors.email ? errors.email : null}</p>
        </div>
        <div>
          <label htmlFor="RegisterBirthdate">Fecha de Nacimiento: </label>
          <input
            id="RegisterBirthdate"
            type="Date"
            name="birthdate"
            value={input.birthdate}
            placeholder="Ingrese Su Fecha de Nacimiento:..."
            onChange={handleChange}
          />
          <p>{errors.birthdate ? errors.birthdate : null}</p>
        </div>
        <div>
          <label htmlFor="RegisterNDni">Número de Dni: </label>
          <input
            id="RegisterNDni"
            type="text"
            name="nDni"
            value={input.nDni}
            placeholder="Ingrese Su Número de Dni:..."
            onChange={handleChange}
          />
          <p>{errors.nDni ? errors.nDni : null}</p>
        </div>
        <div>
          <label htmlFor="RegisterUsername">Nombre de Usuario: </label>
          <input
            id="RegisterUsername"
            type="text"
            name="username"
            value={input.username}
            placeholder="Ingrese Su Nombre de Usuario"
            onChange={handleChange}
          />
          <p>{errors.username ? errors.username : null}</p>
        </div>
        <div>
          <label htmlFor="RegisterPassword">Contraseña: </label>
          <input
            id="RegisterPassword"
            type="password"
            name="password"
            value={input.password}
            placeholder="Ingrese Su Contraseña"
            onChange={handleChange}
          />
          <p>{errors.password ? errors.password : null}</p>
        </div>
        <div>
          <label htmlFor="RegisterConfirmPassword">
            Confirme su Contraseña:
          </label>
          <input
            id="RegisterConfirmPassword"
            type="password"
            name="confirmPassword"
            value={input.confirmPassword}
            placeholder="Confirme Su Contraseña"
            onChange={handleChange}
          />
          <p>{errors.confirmPassword ? errors.confirmPassword : null}</p>
        </div>
        <div className="buttonDiv">
          <button
            className="button"
            type="submit"
            value="Enviar"
            disabled={Object.keys(input).some((element) => !input[element])}
          >
            Registrar
          </button>
          <button onClick={handleReset} className="button">
            Borrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormRegister;
