import React from "react"
// import { render } from "react-dom"
import Item from "./Item.js"

const Stock = (props) => {

    const localUpdate = ([...item]) => {
        props.updateTotal([...item])
    }

    const renderInStockProps = props.inStock.map((stockItem, index) => {
        <Item key={index} data={stockItem} />
    })

    return (
        <>
            {renderInStockProps}
        </>
    )
}

export default Stock