import Text from "../../atoms/text/Text"
import { useState } from 'react'
import styles from './Cart.module.scss'

const Cart = () => {
  const [display, setDisplay] = useState(false)

  
  return (
    <div className={styles.cartContainer} onClick={()=>setDisplay(!display)}>
      <img src="../../../images/icon-cart.svg" alt="Cart Icon" />
      {
        display
        ? <div className={styles.cartDisplay}>
          <Text content={"Cart"}/>
          <hr />
          <Text content={"Your cart is empty."}/>
        </div> 
        : null
      }
    </div>
  )
}

export default Cart