import React from "react"
import Item from "./Item.js"
import styled from 'styled-components'

const StockWrapper = styled.div`
    align-items: center;
    justify-content: center;
    display: grid;
    margin: auto;
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