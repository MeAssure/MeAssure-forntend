import styles from './Dashboard.module.css';
import { Header } from '../Header/Header';

export default function Dashboard({title}) {
	return (
		<div className={styles.Dashboard}>
			<Header text={title.toUpperCase()}/>
		</div>
	);
}