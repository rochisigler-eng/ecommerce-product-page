import Price from "../../atoms/price/Price"


const Cost = ({ priceDiscount, price, priceTotal }) => {
  

  return (
    <>
    <div style={{display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 0"}}>
      <Price
        num={priceTotal}
        size={"2rem"}
        fontWeight={"600"}
        type = {"priceTag"}
      />
      <Price
      num= {priceDiscount}
      backgroundColor={"#000"}
      color={"#fff"}
      type= {"percentage"}
      />
    </div>
      <Price
        num={price}
        size={"1rem"}
        color={"hsl(219, 9%, 45%)"}
        lineThrough={"line-through"}
        fontWeight={550}
        type = {"priceTag"}
      />
    </>
  )
}

export default Cost