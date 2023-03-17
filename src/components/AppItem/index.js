import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList

  return (
    <li className="card-item">
      <img alt={appName} className="app-icon" src={imageUrl} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
