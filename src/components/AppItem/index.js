import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList

  return (
    <li className="card-item">
      <img alt={appName} className="app-icon" src={imageUrl} />
      <h1 className="app-name">{appName}</h1>
    </li>
  )
}

export default AppItem
