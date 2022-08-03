import React from 'react';
import Logo from './../../assets/rbggrocersss.png';
import { Table } from 'reactstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import EmailIcon from '@mui/icons-material/Email';
const Footer2 = () => {
    return (

        <div style={{ backgroundColor: "#E8E8E8", display: "flex", paddingTop: '40px', paddingBottom: "40px", marginTop: '3rem', }} className='container-fluid'>
            <div style={{ display: "flex", flex: "3", justifyContent: "center", marginTop: "10px" }} >
                <img src={Logo} alt="Logo" style={{}} className='img-fluid' />
            </div>
            <div style={{ display: "flex", flex: '3', justifyContent: "center", marginTop: "10px", height: '100%' }} >

                <Table
                    borderless
                /* style={{ width: "70%" }} */
                >
                    <thead>
                        <tr>
                            <th>
                                Contact Info
                            </th>
                            <th>
                                Social Links
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <PhoneIcon /> +88012312
                            </td>
                            <td>
                                <FacebookIcon />
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>Facebook</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <EmailIcon /> asfe-akbar-raju@mail.com
                            </td>
                            <td>
                                <TwitterIcon />
                                <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>Twitter</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <AddLocationAltIcon />
                                <a href="https://www.google.com.bd/maps?hl=en&authuser=0" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>GEC Circle, Chittagong, Bangladesh</a>

                            </td>
                            <td>
                                <InstagramIcon />
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>Instagram</a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>

    );
};

export default Footer2;