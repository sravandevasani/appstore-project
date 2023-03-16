import './index.css'

const TabItem = props => {
  const {tabsList} = props
  const {displayText} = tabsList

  return (
    <li>
      <button className="button" type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
