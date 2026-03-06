import { useState } from 'react'

const QuantityButton = () => {
    const [quantity, setQuantity] = useState(1)

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems:"center", padding: ".5rem", backgroundColor: "hsl(220, 14%, 75%)"}}>
    <span style={{color:"hsl(26, 100%, 55%)", fontSize: "1.5rem", fontWeight: "600"}} onClick={()=>setQuantity(quantity-1)}>-</span>
    <p style={{padding: "0 1.5rem"}}>{quantity}</p>
    <span style={{color:"hsl(26, 100%, 55%)", fontSize: "1.5rem", fontWeight: "600"}} onClick={()=>setQuantity(quantity+1)}>+</span>
    </div>
  )
}

export default QuantityButton