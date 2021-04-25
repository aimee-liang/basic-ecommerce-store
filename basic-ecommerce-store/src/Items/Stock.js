import React from "react"
// import { render } from "react-dom"
import Item from "./Item.js"

const Stock = (props) => {

    const localUpdate = ([...item]) => {
        props.updateTotal([...item])
    }

    const renderInStockProps = props.inStock.map((stockItem) => {
        <Item key={stockItem.id} id={stockItem.id} data={stockItem} />
    })

    return (
        <>
            {renderInStockProps}
        </>
    )
}

export default Stock