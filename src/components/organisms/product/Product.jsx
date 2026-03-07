import styles from './Product.module.scss'
import Details from '../../molecules/details/Details'
import AddToCart from '../../molecules/add-to-cart/AddToCart'

const Product = ({priceDiscount, price, priceTotal, src, item, setQuantity, quantity, setHasItems}) => {
  return (
    <div className={styles.productContainer}>
      <Details
      priceDiscount={priceDiscount}
      price={price}
      priceTotal={priceTotal}
      item={item}
      />
      <AddToCart
      src = {src}
      setQuantity = {setQuantity}
      quantity={quantity}
      setHasItems={setHasItems}
      />
    </div>
  )
}

export default Product