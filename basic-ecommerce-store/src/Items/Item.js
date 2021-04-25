import React from "react"
import Button from "@material-ui/core/Button"

const Item = (props) => {

    return (
        <>
            <h3>{props.data.title}</h3>
            <img alt='{props.data.title}' src={props.data.image} />
            <h4>{props.data.price}</h4>
            <Button variant="contained" color="primary" onClick={props.localUpdate}>Add To Cart</Button>
            {/* <div className="item">
                <h3>Amethyst Pendant</h3>
                <img src="/pexels-photo-965981.jpeg" alt="jewelry piece"/>
                <h5>$75.50</h5>
            </div>
            <Button variant="contained" onClick={props.localUpdate({})}>Click to purchase</Button> 

            <div className="item">
                <h3>Forever Diamond Ring</h3>
                <img src="/pexels-photo-998521.jpeg" alt="jewelry piece"/>
                <h5>Add to cart for details</h5>
                <Button variant="contained" onClick={props.localUpdate}>Click to purchase</Button>
            </div>

            <div className="item">
                <h3>Silver Bangles</h3>
                <img src="/pexels-photo-1191536.jpeg" alt="jewelry piece"/>
                <h5>$65.50</h5>
                <Button variant="contained" onClick={props.localUpdate}>Click to purchase</Button>
            </div>

            <div className="item">
                <h3>Engagement Pairing Rings</h3>
                <img src="/pexels-photo-1670723.jpeg" alt="jewelry piece"/>
                <h5>Add to cart for details</h5>
                <Button variant="contained" onClick={props.localUpdate}>Click to purchase</Button>
            </div> */}
        </>
    )
}

export default Item