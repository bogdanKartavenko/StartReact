import { Notification } from "./components/notification";
import styles from './App.module.css';

export function App() {
  return (
    <>
      <div className={styles.notification}>
        <div className={styles.title}>Notifications</div>
        <Notification
          text='Notification'
          type="success"
        />
        <Notification
          text='Notification'
          type="warning"
        />
        <Notification
          text='Notification'
          type="danger"
        />
      </div>
    </>
  )
}

export default App;
