import { Notification } from "./components/notification";
import styles from './App.module.css';
import { IconCheck } from "./components/notification/icons/IconCheck";
import { IconInfo } from "./components/notification/icons/IconInfo";
import { IconError } from "./components/notification/icons/IconError";

export function App() {
  return (
    <>
      <div className={styles.notification}>
        <div className={styles.title}>Notifications</div>
        <Notification
          text='Notification'
          color={styles.warning}
          icon={<IconInfo />}
        />
        <Notification
          text='Notification'
          color={styles.success}
          icon={<IconCheck />}
        />
        <Notification
          text='Notification'
          color={styles.danger}
          icon={<IconError />}
        />
      </div>
    </>
  )
}

export default App;
