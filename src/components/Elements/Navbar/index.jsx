import { useRef, useEffect } from 'react';
import Tooltip from '../Tooltip/';
import styles from './Style.module.css';
import iconKeyboard from '../../../assets/keyboard.svg';
import iconCamera from '../../../assets/camera.svg';
import iconMicrophone from '../../../assets/microphone.svg';
import iconSearch from '../../../assets/search.svg';
import iconClear from '../../../assets/clear.svg';

//Navbar
function Index() {
    const navRef = useRef(null);
    const textareaRef = useRef(null);
    const formRef = useRef(null);
    const clearRef = useRef(null);

    useEffect(() => {
        let observerTextareaRef = null;
        let observerClearRef = null;
        let observerNavRef = null;

        const handleNavClick = () => {
            formRef.current.classList.add(styles.navbar_focused);
            textareaRef.current.focus();
        }

        const handleFocusOut = () => {
            formRef.current.classList.remove(styles.navbar_focused);
        }

        const handleInput = () => {
            if (textareaRef.current.value.length > 0) {
                clearRef.current.classList.remove("hidden");
            } else {
                clearRef.current.classList.add("hidden");
            }
            
        }

        const handleClear = () => {
            textareaRef.current.value = "";
            handleInput();
        }

        if (navRef.current) {
            navRef.current.addEventListener("click", handleNavClick);
            textareaRef.current.addEventListener("focusout", handleFocusOut);
            textareaRef.current.addEventListener("input", handleInput);
            clearRef.current.addEventListener("click", handleClear);

            observerNavRef = navRef.current;
            observerTextareaRef = textareaRef.current;
            observerClearRef = clearRef.current;
        }

        
        return () => {
            if (observerNavRef) {
                observerNavRef.removeEventListener("click", handleNavClick);
                observerTextareaRef.removeEventListener("focusout", handleFocusOut);
                observerTextareaRef.removeEventListener("input", handleInput);
                observerClearRef.removeEventListener("click", handleClear);
            }
        }
    }, []);



    return (
        <nav className={styles.search_bar} ref={navRef}>
            <form ref={formRef}>
                <div>
                    <div className={styles.item}><img src={iconSearch} alt="lupa de pesquisa"/></div>
                </div>
                <textarea ref={textareaRef} title="Pesquisar"></textarea>
                <div className={styles.accessibility}>
                    <div ref={clearRef} className={[styles.clear, styles.item, "hidden"].join(" ")}><img src={iconClear} title="Limpar" alt="limpar"/></div>
                    <div id="textTools" className={styles.item}><img src={iconKeyboard} alt="teclado"/></div>
                    <div id="voiceSearch" className={styles.item}><img src={iconMicrophone} alt="microfone" /></div>
                    <div id="imageSearch" className={styles.item}><img src={iconCamera} alt="camera" /></div>
                </div>
            </form>
            <Tooltip elementId="textTools" contentText={["Ferramentas de inserção de texto"]} />
            <Tooltip elementId="voiceSearch" contentText={["Pesquisa por voz"]} />
            <Tooltip elementId="imageSearch" contentText={["Pesquisar por imagem"]} />
        </nav>
    );
}

export default Index;