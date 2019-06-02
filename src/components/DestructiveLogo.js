import React, { Component } from 'react';
import RotatingLogo from './RotatingLogo';

const DEFAULT_MAX_HITS = 10;

class DestructiveLogo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: 0,
            isAlive: true
        }
    }

    hitsIntensityToFilter = () => {
        const { hits } = this.state;
        const { maxHits=DEFAULT_MAX_HITS } = this.props;

        const rotation = Math.floor( 180 / maxHits ) * hits;
        const strongness = Math.exp( Math.log(15) / maxHits * hits );
        const colorFilter = `hue-rotate(${rotation}deg) saturate(${strongness})`;

        return colorFilter;
    }

    causeHit = (value=1) => {
        this.setState(prevState => ({
            hits: prevState.hits + 1
        }));
    }

    componentDidUpdate() {
        const { isAlive, hits } = this.state;
        const { maxHits=DEFAULT_MAX_HITS } = this.props;

        if(isAlive && hits === maxHits) {
            this.setState({
                isAlive: false
            });
        }
    }

    componentWillUnmount() {
        console.log('THIS WAY THE COMPONENT WILL NEVER UNMOUNT!')
    }
    
    render() {
        const { isAlive } = this.state;

        return(
            isAlive &&
                <RotatingLogo 
                    colorFilter={this.hitsIntensityToFilter()}
                    onClick={this.causeHit}
                    {...this.props}
                />
        );
    }
}

export default DestructiveLogo;