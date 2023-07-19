import styles from './Style.module.css';
import NavBar from '../../Elements/Navbar/';
import Button from '../../Elements/Button/';

import logo from '../../../assets/logo.png';

//main
function Index() {
    return (
        <main className={styles.main}>
            <div className={styles.logo}>
                <img src={logo} alt="google logo" />
            </div>
            <NavBar/>
            <div className={styles.other_buttons}>
                <Button text="Pesquisa Google" href="#home" />
                <Button text="Estou com sorte" href="#home" />
            </div>
            <div className={styles.checkup}></div>         
        </main>
    );
}

export default Index;