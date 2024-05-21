import styles from './Dashboard.module.css';
import { Header } from '../Header/Header';

export default function Dashboard() {
	return (
		<div className={styles.Dashboard}>
			<Header text="Dashboard"/>
		</div>
	);
}