

const Price = ({ num, color, size, lineThrough, fontWeight, backgroundColor, type }) => {


    return (
        type === "priceTag"
            ?
            <p style={{
                color: color,
                fontSize: size,
                textDecoration: lineThrough,
                fontWeight: fontWeight,
                backgroundColor: backgroundColor
            }}
            >${num.toFixed(2)}</p>
            :
            <span style={{
                color: color,
                fontSize: size,
                textDecoration: lineThrough,
                fontWeight: fontWeight,
                backgroundColor: backgroundColor,
                padding: ".1rem .3rem",
                borderRadius: "5px"
            }}
            >{num}%</span>


    )
}

export default Price