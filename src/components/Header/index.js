import {Component} from 'react'
import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
          />
        </Link>

        <Popup
          modal
          trigger={
            <button type="button" data-testid="hamburgerIconButton">
              <GiHamburgerMenu />
            </button>
          }
        >
          {close => (
            <>
              <div>
                <ul>
                  <li>
                    <Link to="/">
                      <AiFillHome />
                      <p>Home</p>
                    </Link>
                  </li>

                  <li>
                    <Link to="/about">
                      <BsInfoCircleFill />
                      <p>About</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose />
              </button>
            </>
          )}
        </Popup>
      </div>
    )
  }
}

export default Header
