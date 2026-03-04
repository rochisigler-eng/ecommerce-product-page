import styles from './Menu.module.scss'

const Menu = ({ menuPages }) => {
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