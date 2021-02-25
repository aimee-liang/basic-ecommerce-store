import React from "react"
import Item from "./Item.js"

const Stock = (props) => {

    const localUpdate = (item) => {
        return props.UpdateTotal
    }
    return (
        <div className="stock-page">
            <Item onClick = {localUpdate}/>
        </div>
    )
}

export default Stock