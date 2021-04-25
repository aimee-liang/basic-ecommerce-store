import React from "react"
import Item from "./Item.js"
import styled from 'styled-components'

const StockWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Stock = (props) => {

    const localUpdate = (item) => {
        // console.log(item)
        props.updateTotal(item)
    }

    const renderInStockProps = () => { 
        return props.inStock.map((stockItem) => <Item key={stockItem.id} id={stockItem.id} data={stockItem} localUpdate={localUpdate} />)
    }

    return (
        <StockWrapper>
            {renderInStockProps()}
        </StockWrapper>
    )
}

export default Stock