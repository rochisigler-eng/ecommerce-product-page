import PrimaryButton from "../../atoms/primaryButton/PrimaryButton"
import QuantityButton from "../../atoms/quantityButton/QuantityButton"
import styles from './AddToCart.module.scss'

const AddToCart = ({src}) => {
  return (
    <div className={styles.addToCartContainer}>
      <QuantityButton />
      <PrimaryButton
      src = {src}
      />
    </div>
  )
}

export default AddToCart