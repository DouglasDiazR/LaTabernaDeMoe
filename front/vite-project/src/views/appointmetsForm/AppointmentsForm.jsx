import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../../index.css";

const POSTAPPOINTMENT_URL = "http://localhost:3000/appointments/schedule";
const AppointmentsForm = (props) => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.actualUser?.userData.user.id);

  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, [userId, navigate]);

  const initialState = {
    date: "",
    hours: "11",
    minutes: "00",
    description: "",
  };
  const [appointment, setAppointment] = useState(initialState);
  const [errors, setErrors] = useState({
    date: "Dene Ingresar una Fecha",
  });

  //VALIDACIÓN
  const validateAppointments = ({ date, hours, minutes, description }) => {
    const errors = {};
    if (!date) errors.date = "Debe Ingresar una Fecha";
    else if (isMonday(date)) errors.date = "No abrimos los lunes";
    if (!description) errors.description = "Ingresa una Descripción";
    else if (description.length < 10)
      errors.description = "Debe ser de al menos 10 caracteres";
    return errors;
  };

  const isMonday = (date) => {
    const day = new Date(date).getDay();
    return day === 0;
  };

  //HANDLRES
  const handleChange = (event) => {
    const { value, name } = event.target;
    const updatedAppointment = {
      ...appointment,
      [name]: value,
    };
    setAppointment(updatedAppointment);
    setErrors(validateAppointments(updatedAppointment));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAppointement = {
      date: appointment.date,
      time: `${appointment.hours}: ${appointment.minutes}`,
      description: appointment.description,
      userId,
    };
    axios
      .post(POSTAPPOINTMENT_URL, newAppointement)
      .then(({ data }) => {
        alert(
          `Reserva exitosa para el día: ${data.date}, a las ${data.time} horas`
        );
        setAppointment(initialState);
        navigate("/appointments");
      })
      .catch((error) => {
        alert(`Error: ${error.response.data.error}`);
      });
  };

  //GENERAR SELECT HORAS Y MINUTOS VALIDOS
  const validHours = [
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
  ];
  const validMinutes = ["00", "30"];

  //RESTINGIR FECHAS
  const getTomorrow = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };
  const getFourteenDaysAhead = () => {
    const today = new Date();
    const fourteenDaysAhead = new Date(today);
    fourteenDaysAhead.setDate(fourteenDaysAhead.getDate() + 13);
    return fourteenDaysAhead.toISOString().split("T")[0];
  };

  return (
    <div>
      <h1>Haz Tu Reserva</h1>

      <form onSubmit={handleSubmit} className="formDiv">
        <div>
          <label htmlFor="date">Fecha: </label>
          <input
            type="date"
            id="date"
            name="date"
            min={getTomorrow()}
            max={getFourteenDaysAhead()}
            value={appointment.date}
            onChange={handleChange}
          />
          {errors.date && <p>{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="time">Hora: </label>
          <select
            id="hours"
            name="hours"
            value={appointment.hours}
            onChange={handleChange}
          >
            {validHours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <select
            id="minutes"
            name="minutes"
            value={appointment.minutes}
            onChange={handleChange}
          >
            {validMinutes.map((minute) => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </select>
        </div>
        <br />

        <div>
          <label htmlFor="description">Descripción: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={appointment.description}
            placeholder="Ingrese descripción..."
            onChange={handleChange}
          />
          {errors.description && <p>{errors.description}</p>}
        </div>
        <div className="buttonDiv">
          <button
            type="submit"
            disabled={Object.keys(errors).length > 8}
            className="button"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
export default AppointmentsForm;
