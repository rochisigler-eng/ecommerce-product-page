import Icon from "../../atoms/icon/Icon"
import Menu from "../../molecules/menu/Menu"
import Cart from "../../molecules/cart/Cart"
import Avatar from "../../atoms/avatar/Avatar"
import styles from "./Header.module.scss"

const Header = ({src, quantity, hasItems, priceTotal, item}) => {
  return (
    <header>
      <div className={styles.headerLeft}>
        <Icon />
        <Menu
        menuPages={["Collections", "Men", "Women", "About", "Contact"]}
        />
      </div>
      <div className={styles.headerRight}>
        <Cart
        src = {src}
        quantity={quantity}
        hasItems={hasItems}
        priceTotal={priceTotal}
        item={item}
        />
        <Avatar avatar="../../../images/image-avatar.png"/>
      </div>
    </header>
  )
}

export default Header;