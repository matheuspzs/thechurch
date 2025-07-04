import Banner from '../Banner';
import styles from './PageIgreja.module.css';
import PageOfConstruction from '../PageOfConstruction/PageOfConstruction';

function PageIgreja() {
    return (
        <div className={styles.container}>
            <Banner>
                <h1>Nossa <br /> história</h1>
            </Banner>
            <PageOfConstruction />
        </div>
    );
}

export default PageIgreja;