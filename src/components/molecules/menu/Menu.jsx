import styles from './Menu.module.scss'
import { useState } from 'react'
import closeIcon from "../../../../images/icon-close.svg"

const Menu = ({ menuPages, menuOpen, setMenuOpen }) => {
    
    return (
        <nav className={menuOpen? `${styles.open}` : ""}>
            <img src={closeIcon} alt="close icon" className={styles.close} onClick={()=> setMenuOpen(false)}/>
            <ul>
                {
                    menuPages.map((page) => (
                        <li><a href="#">{page}</a></li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Menu