import styles from "../styles/navbar.module.css"
import Link from 'next/link'


function Navbar(){
    return(
        <> 
            <ul className={styles.ul}>
            <li className={styles.li}><Link className={styles.a} href='/Products/homepage'>Home</Link></li>
            <li className={styles.li}><Link className={styles.a} href='/Products/createpage'>Create</Link></li>
            <li className={styles.li}><Link className={styles.a} href='/Products/deletepage'>Delete</Link></li>
            <li className={styles.li}><Link className={styles.a} href='/Products/updatepage'>Update</Link></li>
            <li className={styles.li}><Link className={styles.a} href='/contact'>Contact</Link></li>
            </ul>
        </>
    )
}

export default Navbar