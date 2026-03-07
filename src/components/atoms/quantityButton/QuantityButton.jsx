import { useState } from 'react'
import styles from './QuantityButton.module.scss'

const QuantityButton = () => {
  const [quantity, setQuantity] = useState(1)

  const substractQuantity=()=>{
    quantity > 0 ? setQuantity(quantity-1) : null
  }

  return (
    <div className={styles.quantityContainer}>
      <img className={styles.quantityBtn} src="../../../images/icon-minus.svg" alt="minus icon" onClick={() => substractQuantity()} />
      <p className={styles.quantity}>{quantity}</p>
      <img className={styles.quantityBtn} src="../../../images/icon-plus.svg" alt="plus icon" onClick={() => setQuantity(quantity + 1)} />
    </div>
  )
}

export default QuantityButton