import {
    useState, 
    useEffect 
} from 'react';

const DEFAULT_MAX_HITS = 10;

const useDestructive = (maxHits=DEFAULT_MAX_HITS) => {
    const [ isAlive, setIsAlive ] = useState(true);
    const [ hits, setHits ] = useState(0);
    const [ colorFilter, setColorFilter ] = useState(null);

    useEffect(() => {
        const rotation = Math.floor( 180 / maxHits ) * hits;
        const strongness = Math.exp( Math.log(15) / maxHits * hits );
        const colorFilter = `hue-rotate(${rotation}deg) saturate(${strongness})`;
        setColorFilter(colorFilter);
    }, [hits]);

    useEffect(() => {
        if(isAlive && hits >= maxHits) {
            setTimeout(() => setIsAlive(false), 400);
        }
    }, [hits]);

    const causeHit = (value=1) => event => {
        setHits(hits + value);
    }

    return [ isAlive, colorFilter, causeHit ];
};

export default useDestructive;