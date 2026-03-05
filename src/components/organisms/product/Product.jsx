import styles from './Product.module.scss'
import Details from '../../molecules/details/Details'
import AddToCart from '../../molecules/add-to-cart/AddToCart'

const Product = () => {
  return (
    <div className={styles.productContainer}>
      <Details />
      <AddToCart />
    </div>
  )
}

export default Product