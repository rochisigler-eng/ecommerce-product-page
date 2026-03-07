import ImageDisplay from "../../organisms/image-display/ImageDisplay"
import Header from "../../organisms/header/Header"
import Product from "../../organisms/product/Product"
import styles from './R01EcommerceProductPage.module.scss'
import { useState } from 'react'

const R01EcommerceProductPage = () => {
  const [quantity, setQuantity] = useState (1)
  const [hasItems, setHasItems] = useState(false)
  const [item, setItem] = useState("Fall Limited Edition Sneakers")
  const [price, setPrice] = useState(250)
  const [priceDiscount, setPriceDiscount] = useState(50)
  const [priceTotal, setPriceTotal] = useState(125)

  // setPriceTotal((price*priceDiscount)/100)
  

  return (
    <>
      <Header
      src= "../../../images/icon-cart.svg"
      quantity={quantity}
      priceTotal={priceTotal}
      hasItems={hasItems}
      item={item}
      />
      <hr />
      <div className={styles.productContainer}>
        <ImageDisplay
          products={[
            {
              src: "../../../images/image-product-1.jpg",
              thumbnail: "../../../images/image-product-1-thumbnail.jpg"
            },
            {
              src: "../../../images/image-product-2.jpg",
              thumbnail: "../../../images/image-product-2-thumbnail.jpg"
            },
            {
              src: "../../../images/image-product-3.jpg",
              thumbnail: "../../../images/image-product-3-thumbnail.jpg"
            },
            {
              src: "../../../images/image-product-4.jpg",
              thumbnail: "../../../images/image-product-4-thumbnail.jpg"
            }]
          }
        />
        <Product
          item={item}
          priceDiscount= {priceDiscount}
          price={price}
          priceTotal={priceTotal}
          src= "../../../images/icon-cart.svg"
          setQuantity = {setQuantity}
          quantity={quantity}
          setHasItems={setHasItems}        
        />
      </div>
    </>
  )
}

export default R01EcommerceProductPage