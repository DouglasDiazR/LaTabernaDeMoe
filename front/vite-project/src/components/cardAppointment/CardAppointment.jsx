import styles from "./cardAppointment.module.css";
import PropTypes from "prop-types";
const CardAppointment = ({
  id,
  date,
  time,
  userId,
  status,
  description,
  handleAppointmentCancel,
}) => {
  date = new Date(date);
  const formatDate = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`;

  const handleClick = () => {
    if (
      window.confirm(
        `Desea cancelar el turno del día ${formatDate} a las ${time}`
      )
    ) {
      handleAppointmentCancel(id);
    }
  };

  return (
    <div className={styles.cardAppointmentDiv}>
      <span>{id}</span>
      <span>{formatDate}</span>
      <span>{time}</span>
      <span>{userId}</span>
      <span>{description}</span>
      <span>
        {status === "active" ? (
          <span className={styles.active} onClick={handleClick}>
            Activo
          </span>
        ) : (
          <span className={styles.cancelled}>Cancelado</span>
        )}
      </span>
    </div>
  );
};

CardAppointment.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
export default CardAppointment;
