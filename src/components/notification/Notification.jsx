import clsx from 'clsx';
import styles from './Notification.module.css';
import PropTypes from 'prop-types';
import IconCheck from "../../assets/icons/Check.svg";
import IconInfo from "../../assets/icons/Info.svg";
import IconError from "../../assets/icons/Error.svg";

const icons = {
    success: IconCheck,
    warning: IconInfo,
    danger: IconError,
}

export const Notification = ({ text, type }) => {
    return <button className={clsx(styles.container, styles[type])}> <img className={styles.icon} src={icons[type]} alt={type} /> {text}</button>
};

Notification.propTypes = {
    type: PropTypes.oneOf(['success', 'warning', 'danger']).isRequired,
    text: PropTypes.string.isRequired,
};