import styles from './Style.module.css';

//button
function Index({text, href}) {
    return (
        <a href={href}>
            <button className={styles.button}>
                {text}
            </button>
        </a>
    );
}

export default Index;