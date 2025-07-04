import styles from './Button.module.css';
import { ButtonProps } from './Button.types';
import { Link } from '@remix-run/react';
function Button({
    label,
    onClick,
    type = 'primary',
    disabled = false,
    urlRedirect
}: ButtonProps) {
    return (
        <>
            {urlRedirect ? (
                <Link
                    to={urlRedirect}
                    className={`${styles.button} ${type ? styles[type] : ''}`}
                >
                    {label}
                </Link>
            ) : (
                <button
                    onClick={onClick}
                    className={`${styles.button} ${styles[type]}`}
                    disabled={disabled}
                >
                    {label}
                </button>
            )}
        </>
    );
}

export default Button;