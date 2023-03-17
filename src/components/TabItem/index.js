import './index.css'

const TabItem = props => {
  const {tabsList, onClickTabItem, isActive} = props
  const {tabId, displayText} = tabsList

  const onClickTab = () => {
    onClickTabItem(tabId)
  }

  const highlightSelectedTab = isActive ? 'highlight-btn' : ''

  return (
    <li>
      <button
        onClick={onClickTab}
        className={`button ${highlightSelectedTab}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
