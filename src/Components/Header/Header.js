import './Header.css';
import Logo from '../../assets/logo.png';
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
                <NavbarBrand href="/" className='mr-auto ml-md-5 pt-2 Brand'>
                    <img src={Logo} alt="Logo" width='60px' />
                </NavbarBrand>
                <Nav className='mr-md-5'>
                    <NavItem>
                        <NavLink to="/" className="NavLink">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/" className="NavLink">Orders</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}


export default Header;