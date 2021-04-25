import React from "react"
import Button from "@material-ui/core/Button"
import styled from 'styled-components'

const ItemWrapper = styled.div`
    height: 25vh;
    width: 25vw;
    text-align: center;
`

const Item = (props) => {

    return (
        <ItemWrapper>
            <h4>{props.data.title}</h4>
            <img alt='{props.data.title}' src={props.data.image} style={{height: "20vh", padding: "5px 5px 5px 5px"}} />
            <h5>{props.data.price}</h5>
            <Button variant="contained" color="primary" onClick={props.localUpdate}>Add To Cart</Button>
        </ItemWrapper>
    )
}

export default Item