import Card from "../../components/card/Card";
import styles from "../Home/home.module.css";

const Home = () => {
  return (
    <div className={styles.homeDiv}>
      <Card />
      <Card />
    </div>
  );
};
export default Home;
