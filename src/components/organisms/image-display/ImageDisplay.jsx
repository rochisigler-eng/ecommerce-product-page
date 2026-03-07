import { useState } from 'react'
import styles from './ImageDisplay.module.scss'

const ImageDisplay = ({products}) => {
  const [image, setImage] = useState("../../../images/image-product-1.jpg")
  const [imageId, setImageId] = useState(0)

  const handleClick=(id)=>{
    setImageId(id)
  }

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
          className={imageId === index? `${styles.active}`: `${styles.product}`}
          onClick={(e)=>{
            setImage(product.src)
            handleClick(index)
          } }
          />
          
        ))
      }
      </div>
    </div >
  )
}

export default ImageDisplay