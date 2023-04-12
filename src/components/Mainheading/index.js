/* eslint-disable camelcase */
/* eslint-disable no-undef */
import './index.css'

const Mainheading = props => {
  const {list, changeMain, activeId} = props
  const {menu_category, menu_category_id} = list
  const headingColor = activeId === menu_category_id ? 'heading' : 'headingGree'
  const triggerMain = () => {
    changeMain(menu_category_id)
  }
  return (
    <button className="button category" type="button" onClick={triggerMain}>
      <h2 className={headingColor}>{menu_category}</h2>
    </button>
  )
}

export default Mainheading
