import './App.css';
import React, {useState, useEffect} from "react"
import Logo from "./Logo"
import Cart from "./Cart/Cart"
import Stock from "./Items/Stock"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const App = () => {

  const [total, setTotal] = useState([]) /* how to handle having clicked on more than one item? */
  const [inStock, setInStock] = useState([])
  
  const updateTotal = (item) => setTotal(item)
  const [cartDisplay, setCartDisplay] = useState(false)

  useEffect(() => {
    renderAPIData()
  }, [])

  const renderAPIData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setInStock(data))
      .catch(error => console.log(error))
  }

  const calcTotal = () => {
    console.log(total)
  }

  return (
    <>
    {/* {console.log("Total:", total)} */}
      <Logo />
      <Stock inStock={inStock} updateTotal={updateTotal} />
      <Cart total={total} />
      {/* <ShoppingCartIcon onClick={setCartDisplay(true)} />
      {cartDisplay ? 
        <Cart cartTotal={[...total]}/> 
          : 
        null 
      } */}
      <h4 style={{marginTop: "5%", textAlign: "center"}}>Website design by <a href="https://aimeeliang.com">Aimee Liang</a></h4>
      <h4 style={{marginTop: "2%", textAlign: "center"}}>Do not enter your actual payment information.</h4>
    </>
  );
}

export default App;
