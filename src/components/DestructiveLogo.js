import React from 'react';
import { useDestructive } from '../hooks';

import RotatingLogo from './RotatingLogo';

const DEFAULT_MAX_HITS = 10;

const DestructiveLogo = props => {
    const { maxHits } = props;
    const [ isAlive, colorFilter, causeHit ] = useDestructive(maxHits);

    return (
        isAlive &&
            <RotatingLogo 
                colorFilter={colorFilter}
                onClick={causeHit()}
                {...props}
            />
    );
}

export default DestructiveLogo;