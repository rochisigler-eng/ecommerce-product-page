import Price from "../../atoms/price/Price"


const Cost = ({ discount, price }) => {
  let withDiscount = (price*discount)/100

  return (
    <>
    <div style={{display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 0"}}>
      <Price
        num={withDiscount}
        size={"2rem"}
        fontWeight={"600"}
        type = {"priceTag"}
      />
      <Price
      num= {discount}
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