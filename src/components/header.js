import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex'
      }}
    >
      <h1 style={{
          margin: 0,
          display: 'inline-block'
        }}
      >
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`
          }}
        >
          Joe Czepil
        </Link>
      </h1>
      <div className="header-right-side" style={{
          lineHeight: '44px',
          display: 'inline-block',
          marginLeft: 'auto'
        }}
      >
        <div className="header-option">Projects</div>
        <div className="header-option">My Work</div>
        <div className="header-option">About</div>
      </div>
    </div>
  </header>
)

export default Header
