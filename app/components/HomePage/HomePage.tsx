import Cards from "../Cards";
import TextWithImage from "../TextWithImage";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
        <Cards />
        <TextWithImage/>
    </div>
  );
}

export default HomePage;