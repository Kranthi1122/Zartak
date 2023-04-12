/* eslint-disable camelcase */
import {Component} from 'react'
import './index.css'
import Header from '../Header'

let cartCount = 0

class ItemDetails extends Component {
  state = {count: 0}

  decrease = () => {
    const {count} = this.state

    if (count > 0) {
      cartCount -= 1
      this.setState(prev => ({count: prev.count - 1}))
    }
  }

  //   cartItem = () => {
  //     const {count} = this.state
  //     cartCount += count
  //   }

  increase = () => {
    cartCount += 1
    this.setState(prev => ({count: prev.count + 1}))
  }

  render() {
    const {count} = this.state
    const {list} = this.props

    console.log(cartCount)
    const {
      addonCat,
      dish_Availability,
      dish_Type,
      dish_calories,
      dish_currency,
      dish_description,
      dish_image,
      dish_name,
      dish_price,
    } = list
    const classs = dish_Availability ? 'available' : 'red'
    return (
      <>
        <div className="main-bg">
          <div>
            <button className="icon">
              <p className={classs}>o</p>
            </button>
          </div>
          <div className="item">
            <div className="container">
              <h1>{dish_name}</h1>
              <p>
                {dish_currency}
                <span>{dish_price}</span>
              </p>
              <p>{dish_description}</p>
              {dish_Availability ? (
                <div className="incre">
                  <button
                    className="minus"
                    type="button"
                    onClick={this.decrease}
                  >
                    -
                  </button>
                  <p>{count}</p>
                  <button
                    className="minus"
                    type="button"
                    onClick={this.increase}
                  >
                    +
                  </button>
                </div>
              ) : (
                <p className="error">Not Available</p>
              )}
              {addonCat.length > 0 && (
                <p className="error">Customization available</p>
              )}
            </div>
            <div className="last">
              <p>{dish_calories} calories</p>
              <img className="image" src={dish_image} alt="dishImage" />
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default ItemDetails
