import React, { useState } from "react"
import { Menu, X } from "react-feather"
import { Link } from "gatsby"

import { MAIN_IMAGE } from "../../constants/images"
import { useHeaderQuery } from "../../utils/graphql"
import LinkItem from "./LinkItem"
import Styles from "./Styles"

const Header: React.FC = () => {
  const [navigationVisible, setNavigationVisible] = useState(false)
  const { menu, user } = useHeaderQuery()
  const menuItems = menu?.edges?.[0]?.node?.menuItems?.nodes

  const togglerNavigation = () => setNavigationVisible(prev => !prev)

  return (
    <Styles
      className={navigationVisible ? "mi-header is-visible" : "mi-header"}
    >
      <button onClick={togglerNavigation} className="mi-header-toggler">
        {!navigationVisible ? <Menu /> : <X />}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link to="/">
            <img src={MAIN_IMAGE} alt="brandimage" />
          </Link>
        </div>

        <ul className="mi-header-menu">
          {menuItems?.map(item => (
            <LinkItem
              key={item?.id}
              text={item?.label}
              redirectTo={item?.path}
            />
          ))}
        </ul>
        <p className="mi-header-copyright">
          &copy; {new Date().getFullYear()}{" "}
          <b>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={process.env.GATSBY_FRONTEND_URL}
            >
              {`${user?.firstName} ${user?.lastName}`}
            </a>
          </b>
        </p>
      </div>
    </Styles>
  )
}

export default Header
