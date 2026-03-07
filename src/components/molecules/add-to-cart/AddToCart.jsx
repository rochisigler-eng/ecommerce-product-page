import PrimaryButton from "../../atoms/primaryButton/PrimaryButton"
import QuantityButton from "../../atoms/quantityButton/QuantityButton"
import styles from './AddToCart.module.scss'

const AddToCart = ({src, setQuantity, quantity, setHasItems}) => {
  return (
    <div className={styles.addToCartContainer}>
      <QuantityButton
      setQuantity={setQuantity}
      quantity={quantity}
      />
      <PrimaryButton
      text= "Add to cart"
      src = {src}
      onClick={()=> setHasItems(true)}
      />
    </div>
  )
}

export default AddToCart