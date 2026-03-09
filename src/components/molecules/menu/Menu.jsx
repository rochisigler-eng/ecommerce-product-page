import styles from './Menu.module.scss'
import { useState } from 'react'

const Menu = ({ menuPages }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav>
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