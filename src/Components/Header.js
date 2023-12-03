import React from 'react'
import '../Styles/Header.css'
export default function Header() {
    return (
        <div>
          <div className="header">
            <div className="heading"> <span>B</span>ishnu <span>F</span>urniture</div>
          </div>
          <div className="nav-link">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/products">Products</a>
            <a href="/contact">Contact</a>

          </div>


        </div>
    )
}
