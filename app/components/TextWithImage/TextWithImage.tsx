import styles from './TextWithImage.module.css';

function DescriptionWithIcon({ text = 'Conheça mais sobre Deus' }) {
    return (
        <div className={styles.descriptionWithIcon}>
            <span className={styles.icon}>⭐</span>
            <p>{text}</p>
        </div>
    );
}

function TextWithImage({
    title = 'Somos uma igreja de apaixonados por Jesus',
    description = 'Conheça mais sobre Deus',
    imageUrl = 'https://boladeneve.com/wp-content/uploads/2025/02/foto_03-1.webp',
    buttonText = 'Nossa declaração de fé',
    delay = 0
}) {
    return (
        <div 
            className={styles.textWithImage}
            style={{ animationDelay: `${delay}s` }}
        >
            <div className={styles.containerText}>
                <h1>{title}</h1>
                <div className={styles.descriptions}>
                    <DescriptionWithIcon text="Nosso coração está em sermos família, em uma comunidade de fé!" />
                    <DescriptionWithIcon text="Pregando a Palavra de Deus em amor e ousadia." />
                    <DescriptionWithIcon text="Uma igreja local, atuando de forma global." />
                </div>
                <button className={styles.button}>{buttonText}</button>
            </div>
            <div className={styles.containerImage}>
                <img src={imageUrl} alt="image" />
            </div>
        </div>
    );
}

export default TextWithImage;