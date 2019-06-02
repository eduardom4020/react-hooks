import React from 'react';
import styled from 'styled-components';

import './App.css';

import RotatingLogo from './components/RotatingLogo';

const App = () => {
    return (
        <MainContent>
            <Body>
                <RotatingLogo />
                <p>
                    Hello World!
                </p>
                <ColoredLink
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </ColoredLink>
            </Body>
        </MainContent>
    );
};

const MainContent = styled.div`
    text-align: center;
    background-color: #dbdbdb;
`;

const Body = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const ColoredLink = styled.a`
    color: ${({color}) => color || '#61dafb'};
`;

export default App;