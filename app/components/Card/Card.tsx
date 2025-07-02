import styles from './Card.module.css';

function Card(
    {
        title = 'Deus',
        description = 'Conheça mais sobre Deus',
        imageUrl = 'https://marketplace.canva.com/EAE-iT4dUo8/1/0/1600w/canva-post-instagram-religioso-f%C3%A9-em-deus-mYXQBRvBupM.jpg',
        buttonText = 'Saiba mais',
        delay = 0
    }
) {
    return (
        <div 
            className={styles.card}
            style={{ animationDelay: `${delay}s` }}
        >
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={imageUrl} alt="Imagem do Card" className={styles.image} />
            <button className={styles.button}>{buttonText}</button>
        </div>
    );
}

export default Card;