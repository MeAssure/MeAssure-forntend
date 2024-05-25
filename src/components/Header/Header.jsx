import styles from './Header.module.css';

export function Header({text}) {
    return (
        <div className={styles.Header}>
            {text}
        </div>
    );
}