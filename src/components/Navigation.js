import React from 'react'

function Navigation() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="images1/brand_logo.png" alt="brand" />
        </div>
        <ul>
          <li href='#'>Menu</li>
          <li href='#'>Location</li>
          <li href='#'>About</li>
          <li href='#'>Contact</li>
        </ul>
        <button><span>login</span></button>
      </nav>
    </div>
  )
};

export default Navigation
