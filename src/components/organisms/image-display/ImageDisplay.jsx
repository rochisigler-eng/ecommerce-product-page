import { useState } from 'react'
import styles from './ImageDisplay.module.scss'

const ImageDisplay = ({products}) => {
  const [image, setImage] = useState("../../../images/image-product-1.jpg")
  return (
    <div className={styles.imageDisplayContainer}>
      <img src={image} alt="Product Image" className={styles.large} />
      <div className={styles.thumbnail}>
      {
        products.map((product, index)=>(
          
          <img 
          key={index}
          src={product.thumbnail} 
          alt="Product Image"
          className={`${styles.product}`}
          onClick={()=> setImage(product.src)}
          />
          
        ))
      }
      </div>
    </div >
  )
}

export default ImageDisplay