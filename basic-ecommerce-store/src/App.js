import './App.css';
import React, {useState, useEffect} from "react"
import Logo from "./Logo"
import Cart from "./Cart/Cart"
import Stock from "./Items/Stock"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const App = () => {

  const [total, setTotal] = useState([]) 
  const [inStock, setInStock] = useState([])
  
  const updateTotal = (item) => setTotal([...item]) /* item is an object in an array to show price and quant. */
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


  return (
    <>
      <Logo />
      <Stock inStock={inStock}/>
      {/* <ShoppingCartIcon onClick={setCartDisplay(true)} />
      {cartDisplay ? 
        <Cart cartTotal={[...total]}/> 
          : 
        null 
      } */}
      <h4>Website design by <a href="https://aimeeliang.com">Aimee Liang</a></h4>
      <h5>Please note this is a demo app. Do not enter your actual payment information.</h5>
    </>
  );
}

export default App;
