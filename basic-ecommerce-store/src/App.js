import './App.css';
import React, {useState} from "react"
import Logo from "./Logo"
import Cart from "./Cart/Cart"
import Stock from "./Items/Stock"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const App = () => {

  const [total, setTotal] = useState([]) 
  const [cartDisplay, setCartDisplay] = useState(false)

  const updateTotal = (item) => setTotal([...item]) /* have count included? */

  return (
    <>
      <Logo />
      <Stock updateTotal={updateTotal}/>
      <Cart cartTotal={setTotal} cartDisplay={...cartDisplay}/>
      <ShoppingCartIcon onClick = {()=> setCartDisplay(true)} />
      <h4>Website design by <a href="https://aimeeliang.com">Aimee Liang</a></h4>
    </>
  );
}

export default App;
