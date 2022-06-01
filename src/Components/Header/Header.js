import './Header.css';
import Logo from '../../assets/grocersss.png';
import CartIcon from '../../assets/cart.png';
import { NavLink } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

const Header = () => {
    return (
        <div className='Navigation'>
            <Navbar style={{
                backgroundColor: '#D70F64',
                height: '70px',
            }}>
                <NavbarBrand href="/" className='mr-auto ml-md-5  Brand'>

                    <img src={Logo} alt="Logo" width='14%' style={{ position: 'absolute' }} />

                </NavbarBrand>
                <Nav className='mr-md-5 pt-2'>
                    <NavItem>
                        <NavLink to="/" className="NavLink">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/cart" className="NavLink Cart"><button type="button" class="m-0 p-0 btn position-relative">
                            <img width='45px' height='45px' src={CartIcon} alt="Cart" />
                            <span style={{ backgroundColor: "white", color: "#D70F64" }} class="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                                0

                            </span>
                        </button></NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}


export default Header;