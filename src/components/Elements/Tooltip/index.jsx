import { useEffect, useRef } from 'react';
import styles from './Style.module.css';

function Index({ elementId, contentText = [], tooltipStyle = { textAlign: "center", pcolor: null, scolor: null, border: true, borderRadius: 0, arrow: true } }) {
    const contentNode = contentText.map((value, index) => <p key={index}>{value}</p>);
    const tooltipRef = useRef(null);
    
    //generation
    useEffect(() => {
        let elementRef = null;
        let observerTooltipRef = null;

        const getCenter = (element) => {
            return {
                x: element.clientWidth / 2,
                y: element.clientHeight / 2
            }
        }

        const getPosition = (element) => {
            const rect = element.getBoundingClientRect();
            return {
                x: {
                    anchorStart: rect.left,
                    anchorCenter: rect.left + getCenter(element).x,
                    anchorEnd: rect.left + element.clientWidth
                },
                y: {
                    anchorStart: rect.top,
                    anchorCenter: rect.top + getCenter(element).y,
                    anchorEnd: rect.top + element.clientHeight
                }
            }
        }

        //style
        const loadStyles = () => {
            if(tooltipRef.current) {
                const currentTooltipStyle = tooltipRef.current.style;
                const currentArrowStyle = tooltipRef.current.querySelector(`.${styles.arrow}`).style;

                if(tooltipStyle.pcolor) {
                    currentTooltipStyle.setProperty("background-color", tooltipStyle.pcolor);
                    currentArrowStyle.setProperty("background-color", tooltipStyle.pcolor);
                }

                if(tooltipStyle.scolor) {
                    currentTooltipStyle.setProperty("border", `1px solid ${tooltipStyle.scolor}`);
                    currentArrowStyle.setProperty("border", `1px solid ${tooltipStyle.scolor}`);
                }

                if(tooltipStyle.borderRadius) { 
                    currentTooltipStyle.setProperty("border-radius", tooltipStyle.borderRadius);
                }

                if(tooltipStyle.border === false) {
                    currentTooltipStyle.setProperty("border", "1px solid transparent");
                    currentArrowStyle.setProperty("border", "1px solid transparent");
                }

                if(tooltipStyle.arrow === false) {
                    currentArrowStyle.setProperty("display", "none");
                }
            }
        }

        const handleMouseOver = () => {
            loadStyles();
            const elementRefPos = getPosition(elementRef);
            const tooltipRefPos = getPosition(tooltipRef.current);
            const arrow = tooltipRef.current.querySelector(`.${styles.arrow}`);
            const screenBound = {
                left: 0,
                right: document.querySelector("body").clientWidth
            }

            tooltipRef.current.classList.remove("hidden");

            let tooltipPosLeft;

            if (screenBound.right < elementRefPos.x.anchorCenter + getCenter(tooltipRef.current).x) {
                tooltipPosLeft = elementRefPos.x.anchorEnd - tooltipRef.current.clientWidth;
            } else {
                tooltipPosLeft = elementRefPos.x.anchorCenter - getCenter(tooltipRef.current).x;
            }

            arrow.style.setProperty("left", `${(elementRefPos.x.anchorCenter - tooltipRefPos.x.anchorStart) - getCenter(arrow).x}px`);
            tooltipRef.current.style.setProperty("top", `${elementRefPos.y.anchorEnd}px`);
            tooltipRef.current.style.setProperty("left", `${tooltipPosLeft}px`);
        }

        const handleMouseOut = () => {
            tooltipRef.current.classList.add("hidden");
        }

        if (tooltipRef.current) {
            elementRef = document.querySelector(`#${elementId}`);
            elementRef.addEventListener("mouseover", handleMouseOver);
            elementRef.addEventListener("mouseout", handleMouseOut);
            observerTooltipRef = tooltipRef.current;
        }

        return () => {
            if (observerTooltipRef) {
                observerTooltipRef.removeEventListener("mouseover", handleMouseOver);
                observerTooltipRef.removeEventListener("mouseout", handleMouseOut);
            }
        }
    }, [elementId, tooltipStyle]);

    return (
        <div ref={tooltipRef} align={tooltipStyle.textAlign} className={[styles.tooltip, "hidden"].join(" ")}>
            <span className={styles.arrow}></span>
            {contentNode}
        </div>
    );
}

export default Index;