import styles from '../page.module.css';
import { NavMenu } from '../nav';
export default function Home() {
  return (
    <main className={styles.main}>
      <NavMenu />
      Информация
    </main>
  );
}
