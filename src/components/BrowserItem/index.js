import React from 'react'
import './index.css'

const BrowserItem = props => {
  const {details, dltBut} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details

  const deleteBut = () => {
    dltBut(id)
  }
  return (
    <li>
      <div className="listItem">
        <p className="para">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p className="para">{title}</p>
        <p className="para">{domainUrl}</p>
      </div>
      <div>
        <button onClick={deleteBut} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default BrowserItem
