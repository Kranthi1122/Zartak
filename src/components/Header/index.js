import {Component} from 'react'
// import {BsFillCartFill} from 'react-icons/bs'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="head">
        <div>
          <h2>UNI Resto Cafe</h2>
        </div>
        <div className="lala">
          <p>My Orders</p>
          <img
            className="cart"
            src="https://static.vecteezy.com/system/resources/previews/000/356/583/original/vector-shopping-cart-icon.jpg"
            alt="icon"
          />
        </div>
      </div>
    )
  }
}
export default Header
