import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.svg';

const RotatingLogo = props => {
    return (
        <RotatingImage 
            src={logo} 
            alt='logo'
            {...props}
        />
    );
};

const RotatingImage = styled.img`
    @keyframes spin-animation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
    animation: spin-animation infinite 20s linear;
    height: 40vmin;
    cursor: pointer;

    filter : ${({colorFilter}) => colorFilter || ''};
`;

export default RotatingLogo;