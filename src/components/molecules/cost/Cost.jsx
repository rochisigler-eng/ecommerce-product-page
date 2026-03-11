import Price from "../../atoms/price/Price"
import styles from "./Cost.module.scss"

const Cost = ({ priceDiscount, price, priceTotal }) => {


  return (
    <>
      <div className={styles.costContainer}>
        <div className={styles.price} >
          <Price
            num={priceTotal}
            size={"2rem"}
            fontWeight={"600"}
            type={"priceTag"}
          />
          <Price
            num={priceDiscount}
            backgroundColor={"#000"}
            color={"#fff"}
            type={"percentage"}
          />
        </div>
        <Price
          num={price}
          size={"1rem"}
          color={"hsl(219, 9%, 45%)"}
          lineThrough={"line-through"}
          fontWeight={550}
          type={"priceTag"}
        />
      </div>
    </>
  )
}

export default Cost