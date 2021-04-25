import React from "react"
import Item from "./Item.js"
import styled from 'styled-components'

const StockWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Stock = (props) => {

    const localUpdate = ([...item]) => {
        props.updateTotal([...item])
    }

    const renderInStockProps = () => { 
        return props.inStock.map((stockItem) => <Item key={stockItem.id} id={stockItem.id} data={stockItem} />)
    }

    return (
        <StockWrapper>
            {renderInStockProps()}
        </StockWrapper>
    )
}

export default Stock