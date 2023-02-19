import clsx from 'clsx';
import styles from './Notification.module.css';

export const Notification = ({icon, text, color}) => {
    return <div className={clsx(styles.container, color)}> <div className={styles.icon}>{icon}</div> {text}</div>
};