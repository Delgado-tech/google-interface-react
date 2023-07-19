import styles from "./Style.module.css";

function Index() {
    return (
        <footer className={styles.footer}>
            <div className={styles.row}>
                <p>Brasil</p>
            </div>
            <div className={styles.row}>
                <div className={styles.about}>
                    <ul>
                        <li><a className="hiperlink" href="#home">Sobre</a></li>
                        <li><a className="hiperlink" href="#home">Publicidade</a></li>
                        <li><a className="hiperlink" href="#home">Negócios</a></li>
                        <li><a className="hiperlink" href="#home">Como funciona a Pesquisa</a></li>
                    </ul>
                </div>
                <div className={styles.info}>
                    <ul>
                        <li><a className="hiperlink" href="#home">Privacidade</a></li>
                        <li><a className="hiperlink" href="#home">Termos</a></li>
                        <li><a className="hiperlink" href="#home">Configurações</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Index;