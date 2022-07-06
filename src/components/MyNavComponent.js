import React from 'react'

const MyNavComponent = () => {
  return (
    <div style={{height:"70px"}}><nav className="navbar">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img src="/images/my-logo.png" alt="" width="60" height="48" className="d-inline-block align-middle" />{" "}<span className="d-inline-block align-middle"><h2>My Network</h2></span>
      </a>
    </div>
  </nav></div>
  )
}

export default MyNavComponent