import React from 'react';
import FooterCol from './FooterCol';
import styled from 'styled-components';
import Logo from './../../assets/rbggrocersss.png';
import FacebookIcon from '@mui/icons-material/Facebook';

const FooterStyles = styled.div`
    padding-top:2rem;
    background-color: #d3d3d3;
    margin-bottom:-18px;
    margin-top:5rem;
    
    
    .container{
        display:flex;
        gap:1rem;
       
    }
    .footer-col1{
        flex:3;
    }
    
    .footer-col3,
    .footer-col4{
        padding-top:1rem;
        flex:1;
    }
    .footer-col1-title{
        font-size:40px;
    }
    @media only screen and (max-width: 768px){
        {
            .container {
              flex-direction: column;
              gap: 0rem;
              & > div {
                margin-top: 5rem;
              }
            }
            .footer-col1 {
              padding:30px;
            }
    }
`;

const Footer = () => {

    return (
        <FooterStyles>
            <div>
                <div className='container'>
                    <div className='footer-col1'>
                        <img src={Logo} alt="Logo" width='30%' height="70%" style={{ marginLeft: '-70px' }} />
                    </div>

                    <div className='footer-col3'>
                        <FooterCol
                            heading="Contact Info"
                            links={[
                                {
                                    icon: <FacebookIcon />,
                                    title: '+88012312',
                                    path: 'tel:+88012312',

                                },
                                {
                                    title: 'asfe-akbar-raju@mail.com',
                                    path: 'asfe-akbar-raju@mail.com',
                                },
                                {
                                    title: 'GEC Circle, Chittagong, Bangladesh',
                                    path: 'http://google.com/maps',
                                },
                            ]}
                        />
                    </div>
                    <div className='footer-col4'>
                        <FooterCol
                            heading="Social Links"
                            links={[
                                {
                                    title: 'Facebook',
                                    path: 'http://facebook.com',
                                },
                                {
                                    title: 'Twitter',
                                    path: 'http://twitter.com',
                                },
                                {
                                    title: 'Instagram',
                                    path: 'http://instagram.com',
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </FooterStyles>
    );
};

export default Footer;