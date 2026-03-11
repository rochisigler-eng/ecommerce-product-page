import Icon from "../../atoms/icon/Icon"
import Menu from "../../molecules/menu/Menu"
import Cart from "../../molecules/cart/Cart"
import Avatar from "../../atoms/avatar/Avatar"
import styles from "./Header.module.scss"
import { useState } from 'react'
import hamburgerIcon from "../../../../images/icon-menu.svg"

const Header = ({ src, quantity, hasItems, priceTotal, item }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div className={styles.headerLeft}>
        <Icon />
        <img src={hamburgerIcon} alt="menu" className={styles.hamburger} onClick={() => setMenuOpen(true)} />
        <Menu
          menuPages={["Collections", "Men", "Women", "About", "Contact"]}
          menuOpen={menuOpen}
          setMenuOpen= {setMenuOpen}
        />
      </div>
      <div className={styles.headerRight}>
        <Cart
          src={src}
          quantity={quantity}
          hasItems={hasItems}
          priceTotal={priceTotal}
          item={item}
        />
        <Avatar avatar="../../../images/image-avatar.png" />
      </div>
    </header>
  )
}

export default Header;