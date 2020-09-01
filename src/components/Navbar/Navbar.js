import React from 'react'
import './Navbar.css'
import { ReactComponent as Logo }from './logo.svg'

function Navbar() {
  return (
    <div>
      <div id="the_navbar">
        <nav className="container mx-auto desktop__navbar font-sans">
          <div className="logo">
            <Logo />
            <p className="nav__logo">Unique<span>Ideas</span>.</p>
          </div>
          <ul className="desktop__nav__list">
            <li><a className="active" href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master">Home</a></li>
            <li><a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master">Projects</a></li>
            <li><a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master">Contact Me</a></li>
          </ul>
          <div id="openButton" className="mobile__hamburger">
            <div></div>
          </div>
        </nav>
        <div id="myModal" className="mobile__nav__bg">
          <div className="mobile__nav">
            <div id="closeBtn" className="closeBtn">
              <div></div>
            </div>
            <ul>
              <li className="active"><a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master">Home</a></li>
              <li><a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master">Projects</a></li>
              <li><a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master">Contact Me</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
