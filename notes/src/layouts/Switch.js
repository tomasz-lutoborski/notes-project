import styles from "./switch.module.css";

const Switch = ({onSwitch, currentView}) => {
    return (
        <button className={styles.switch} onClick={onSwitch}>{currentView}</button>
    )
};

export default Switch;
