import styles from './Banner.module.css';

function Banner({children}: {children: React.ReactNode}) {
    return (
        <div className={styles.page}>
            <div className={styles.containerTitle}>
                {children}
            </div>
        </div>
    )
}

export default Banner;