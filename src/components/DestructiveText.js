import React from 'react';
import { useDestructive } from '../hooks';

import styled from 'styled-components';

const DestructiveText = props => {
    const { children } = props;
    const { maxHits } = props;

    const [ isAlive, colorFilter, causeHit ] = useDestructive(maxHits);

    return (
        isAlive &&
            <ColoredText
                colorFilter={colorFilter}
                onClick={causeHit()}
            >
                { children }
            </ColoredText>
    );
};

const ColoredText = styled.p`
    cursor: pointer;
    color: white;
    filter : ${({colorFilter}) => colorFilter || ''};
`;

export default DestructiveText;