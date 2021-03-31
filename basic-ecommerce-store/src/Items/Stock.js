import React from "react"
import Item from "./Item.js"

const Stock = (props) => {

    const localUpdate = ([...item]) => {
        props.updateTotal([...item])
    }

    return (
        <div className="stock-page">
            <Item localUpdate={localUpdate} />
        </div>
    )
}

export default Stock