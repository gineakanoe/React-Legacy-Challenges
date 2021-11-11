import React, {Component} from 'react';
import Dogs from './Dogs';

class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {img: ''}
    }

    componentDidMount = () => {
        console.log('Component has mounted!');

        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => this.setState({img: data.url}));
    };

    render(){
        return(
            <div>
                <h3>Get That Dog Challenge!</h3>
                <Dogs url={this.state.img} />
                <button onClick={this.componentDidMount}>New Random Dog?</button>
            </div>
        )
    }
};

export default DogIndex;