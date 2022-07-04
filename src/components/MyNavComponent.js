import React from 'react'

const MyNavComponent = () => {
  return (
    <div><nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img src="/images/my-logo.png" alt="" width="30" height="24" className="d-inline-block align-middle" />
        {" "}My Network
      </a>
    </div>
  </nav></div>
  )
}

export default MyNavComponent