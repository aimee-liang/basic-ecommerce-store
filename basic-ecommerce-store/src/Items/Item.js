import React from "react"
import Button from "@material-ui/core/Button"
import styled from 'styled-components'

const ItemWrapper = styled.div`
    height: 30vh;
    width: 25vw;
    text-align: center;
    padding-bottom: 5%;
`

const Item = (props) => {

    const localClickHandler = () => {
        props.localUpdate(props.data.id)
    }

    return (
        <>
        {/* {console.log(props)} */}
        <ItemWrapper>
            <h3 style={{paddingTop: "5%", paddingBottom: "5%"}}>{props.data.title}</h3>
            <img alt='{props.data.title}' src={props.data.image} style={{height: "16vh", width: "10vw", padding: "5px 5px 5px 5px"}} />
            <h4>${props.data.price}</h4>
            <Button variant="contained" color="primary" onClick={localClickHandler}>Add To Cart</Button>
        </ItemWrapper>
        </>
    )
}

export default Item