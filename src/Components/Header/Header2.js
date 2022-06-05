import React, { useEffect, useState } from 'react'
import './Header2.css'
import './Header.css';
import Logo from '../../assets/grocersss.png';
import CartIcon from '../../assets/cart.png';
import { NavLink } from 'react-router-dom';
import { useCart } from "react-use-cart";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const Header2
  = () => {
    const [show, setShow] = useState(true)
    const controlNavbar = () => {
      if (window.scrollY > 100) {
        setShow(false)
      } else {
        setShow(true)
      }
    }

    useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }, [])

    const {
      totalItems
    } = useCart();

    return (
      <div className={`nav ${show && 'nav_color'}`}>
        <Navbar style={{
          backgroundColor: '#D70F64',
          height: '70px'
        }}>
          <NavbarBrand href="/" className=' ml-md-5 Brand'>
            <img src={Logo} alt="Logo" width='105px' style={{ marginLeft: '-13px' }} />
          </NavbarBrand>
          <Nav className=' pt-2'>
            <NavItem>
              <NavLink to="/" className="NavLink">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/cartadvanced" className="NavLink Cart"><button style={{ marginTop: '-5px' }} type="button" className="p-0 btn position-relative">
                <img width='45px' height='45px' src={CartIcon} alt="Cart" />
                <span style={{ backgroundColor: "white", color: "#D70F64" }} className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                  {totalItems}

                </span>
              </button></NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }

export default Header2;
