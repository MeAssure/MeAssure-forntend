import styles from './ListItem.module.css'

export function ListItem({title, changer}) {
    return (
        <div 
            className={styles.ListItem}
            onClick={()=>{
                changer(title)
            }}
        > {title} </div>
    )
}