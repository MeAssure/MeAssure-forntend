import { Header } from '../Header/Header';
import {ListItem} from '../ListItem/ListItem'
import styles from './MenuBar.module.css';

export default function MenuBar({changer}) {
	return (
		<div className={styles.MenuBar}>
			<Header text="Options"/>

			<ListItem title="BOARD 1" changer={changer}/>
			<ListItem title="BOARD 2" changer={changer}/>
			<ListItem title="CREATE NEW BOARD" changer={changer}/>
			<ListItem title="CALCULATOR" changer={changer}/>
			<ListItem title="MORE APPS" changer={changer}/>
			<ListItem title="SETTINGS" changer={changer}/>
		</div>
	);
}