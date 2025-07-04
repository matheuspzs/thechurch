import styles from './PageOfConstruction.module.css';
import atentionSvg from '../../assets/Frame.svg';
import Button from '../Button';

function PageOfConstruction() {
    
    return (
        <div className={styles.container}>
            <img src={atentionSvg} alt="atention" />
            <h1>Página em Construção</h1>
            <p>Esta página está em construção. Volte mais tarde para ver as novidades!</p>
            <Button label="Página Inicial" urlRedirect='/' onClick={() => {}} />
        </div>
    );
}

export default PageOfConstruction;