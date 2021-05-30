import React, { useState } from "react"
import { Menu, X } from "react-feather"
import { Link } from "gatsby"

import Styles from "./Styles"
import LinkItem from "./LinkItem"

const Header = () => {
  const [navigationVisible, setNavigationVisible] = useState(false)

  const togglerNavigation = () => setNavigationVisible(prev => !prev)

  return (
    <Styles navigationVisible={navigationVisible}>
      <button onClick={togglerNavigation} className="mi-header-toggler">
        {!navigationVisible ? <Menu /> : <X />}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link to="/">
            <img src="" alt="brandimage" />
          </Link>
        </div>

        <ul className="mi-header-menu">
          <LinkItem text="Home" redirectTo="" />
          <LinkItem text="About" redirectTo="about" />
          <LinkItem text="Resume" redirectTo="resume" />
          <LinkItem text="Projects" redirectTo="projects" />
          <LinkItem text="Blog" redirectTo="blog" />
          <LinkItem text="Contact" redirectTo="contact" />
        </ul>
        <p className="mi-header-copyright">
          &copy; {new Date().getFullYear()}{" "}
          <b>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={process.env.GATSBY_FRONTEND_URL}
            >
              Mduduzi Ndhlovu
            </a>
          </b>
        </p>
      </div>
    </Styles>
  )
}

export default Header
