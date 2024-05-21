import { Header } from '../Header/Header';
import styles from './MenuBar.module.css';

export default function MenuBar() {
	return (
		<div className={styles.MenuBar}>
			<div className={styles.Dashboard}>
				<Header text="Menubar"/>
			</div>
		</div>
	);
}