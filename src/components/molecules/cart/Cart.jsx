import Text from "../../atoms/text/Text"
import { useState } from 'react'
import styles from './Cart.module.scss'
import PrimaryButton from "../../atoms/primaryButton/PrimaryButton"

const Cart = ({ src, quantity, hasItems, priceTotal, item }) => {
  const [display, setDisplay] = useState(false)
  let total = priceTotal * quantity

  return (
    <div className={styles.cartContainer} onClick={() => setDisplay(!display)}>
      <img src={src} alt="Cart Icon" />
      {
        display
          ? <div className={styles.cartDisplay}>
            <Text text={"Cart"} />
            <hr />
            {
              hasItems
                ?
                <div className={styles.cartInfo}>
                  <div className={styles.productQuantity}>{quantity}</div>
                  <div className={styles.productInfo}>
                    <div><img className={styles.cartImage} src="../../../images/image-product-1-thumbnail.jpg" alt="product image" /></div>
                    <div>
                      <p className={styles.itemTitle}>{item}</p>
                      <p className={styles.priceInfo}>${priceTotal} x {quantity} <span className={styles.total} style={{ fontWeight: "bold" }}>${total}</span> </p>
                    </div>
                  </div>
                  <div className={styles.checkout}>
                    <PrimaryButton
                      text="Checkout"
                    />
                  </div>
                </div>
                : <Text text={"Your cart is empty."} />
            }
          </div>
          : null
      }
    </div>
  )
}

export default Cart