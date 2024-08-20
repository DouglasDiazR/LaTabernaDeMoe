import cardBarMoeImg from "../../assets/cardBarMoe.jpg";
import styles from "./Card.module.css";
const Card = () => {
  return (
    <div className={styles.cardDiv}>
      <img src={cardBarMoeImg} alt="Bar Moe" />
      <p>
        Queridos Clientes, En la Taberna de Moe valoramos la diversión y la
        seguridad de todos nuestros visitantes. Por eso, recordamos a nuestros
        queridos amigos de Springfield que este es un bar para adultos. 🚫
        Menores de 18 años no están permitidos 🆔 Identificación requerida en la
        entrada Agradecemos su comprensión y cooperación para mantener el
        ambiente adecuado para todos. Si tienes alguna duda o necesitas más
        información, no dudes en contactarnos.
      </p>
    </div>
  );
};
export default Card;
