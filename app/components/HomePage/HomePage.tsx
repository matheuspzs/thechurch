import Cards from "../Cards";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
        <Cards />
    </div>
  );
}

export default HomePage;