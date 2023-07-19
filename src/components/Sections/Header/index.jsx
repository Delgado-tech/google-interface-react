import styles from './Style.module.css';
import iconGoogleApps from '../../../assets/icon-google-apps.svg';
import profilePhoto from '../../../assets/profile-photo.jpeg';
import Tooltip from '../../Elements/Tooltip/';

//header
function Index() {
    const tooltipStyle = {
        pcolor: "#F9F9F9", 
        scolor: "#F2F2F2", 
        borderRadius: "5px", 
        arrow: false
    }

    return (
        <header className={styles.header}>
            <ul>
                <li><a className="hiperlink" href="#home">Gmail</a></li>
                <li><a className="hiperlink" href="#home">Imagens</a></li>
                <li><a id="google_apps" className={styles.google_apps} href="#home"><img src={iconGoogleApps} title="Google Apps" alt="Google Apps" /></a></li>
                <li><a id="profile" className={styles.profile} href="#home"><img src={profilePhoto} alt="perfil" /></a></li>
            </ul>
            <Tooltip elementId="google_apps" contentText={[<b>Google Apps</b>]} tooltipStyle={tooltipStyle}/>
            <Tooltip elementId="profile" contentText={[<b>Conta do Goole</b>, "Leonardo Delgado", "leonardo.delgado@gmail.com"]} tooltipStyle={tooltipStyle}/>
        </header>
    );
}

export default Index;