/* eslint-disable */
import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React, { useCallback, useState, useEffect } from "react"

import Button from "@theme/Button"
import SearchBar from "@theme/SearchBar"
import useLockBodyScroll from "@theme/hooks/useLockBodyScroll"
import useWindowSize, { windowSizes } from "@theme/hooks/useWindowSize"

import styles from "./styles.module.css"
import NavbarItem from "@theme/NavbarItem"

const DefaultNavItemPosition = "right"

function splitNavItemsByPosition(items) {
  const leftItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === "left",
  )
  const rightItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === "right",
  )
  return {
    leftItems,
    rightItems,
  }
}

function Navbar(): JSX.Element {
  const {
    siteConfig: {
      themeConfig: {
        navbar: { items, logo },
      },
      url,
    },
    isClient,
  } = useDocusaurusContext()
  const [sidebarShown, setSidebarShown] = useState(false)
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false)

  useLockBodyScroll(sidebarShown)

  const showSidebar = useCallback(() => {
    setSidebarShown(true)
  }, [])
  const hideSidebar = useCallback(() => {
    setSidebarShown(false)
  }, [])

  const windowSize = useWindowSize()

  useEffect(() => {
    if (windowSize === windowSizes.desktop) {
      setSidebarShown(false)
    }
  }, [windowSize])

  const { leftItems, rightItems } = splitNavItemsByPosition(items)

  return (
    <nav
      className={clsx("navbar", "navbar--light", "navbar--fixed-top", {
        "navbar-sidebar--show": sidebarShown,
      })}
    >
      <div className="navbar__inner">
        <div className="navbar__items">
          <div
            aria-label="Navigation bar toggle"
            className="navbar__toggle"
            role="button"
            tabIndex={0}
            onClick={showSidebar}
            onKeyDown={showSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              role="img"
              focusable="false"
            >
              <title>Menu</title>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          </div>
          <a className="navbar__brand" href={url}>
            <img
              alt={logo.alt}
              className="navbar__logo"
              key={`${isClient}`}
              src={logo.src}
            />
          </a>
          {leftItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
        </div>
        <div className="navbar__items navbar__items--right">
          {rightItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
          <SearchBar
            handleSearchBarToggle={setIsSearchBarExpanded}
            isSearchBarExpanded={isSearchBarExpanded}
          />
          <Button className={styles.getStarted} size="xsmall" to="/get-started">
            Get Started
          </Button>
        </div>
      </div>
      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={hideSidebar}
      />
      <div className="navbar-sidebar">
        <div className="navbar-sidebar__brand">
          <a className="navbar__brand" href={url} onClick={hideSidebar}>
            <img
              alt={logo.alt}
              key={`${isClient}`}
              className="navbar__logo"
              src={logo.src}
            />
          </a>
        </div>
        <div className="navbar-sidebar__items">
          <div className="menu">
            <ul className="menu__list">
              {items.map((item, i) => (
                <NavbarItem mobile {...item} onClick={hideSidebar} key={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
/* eslint-enable */