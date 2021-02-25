import './App.css';
import React, {useState} from "react"
import Logo from "./Logo"
import Cart from "./Cart/Cart"
import Stock from "./Items/Stock"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const App = () => {

  const [total, setTotal] = useState([]) 

  const updateTotal = (item) => setTotal([...item]) /* have count included? */

  return (
    <>
      <Logo />
      <Stock updateTotal={updateTotal}/>
      <Cart cartTotal={setTotal}/>
      {/* <ShoppingCartIcon onClick = {()=> <Cart cartTotal={setTotal}/> } /> */}
        {/* above needs to change such that on Click, cart appears */}
      <h4><a href="https://aimeeliang.com">Website design by Aimee Liang</a></h4>
    </>
  );
}

export default App;
