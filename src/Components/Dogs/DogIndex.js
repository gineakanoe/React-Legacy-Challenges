import React, {Component} from 'react';

class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {url: ''}
    }

    componentDidMount = () => {
        console.log('Component has mounted!');

        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            this.setState({
                url: data.message,
            })
            console.log(data)
        })
        .catch(err => console.log(err));
    };

    render(){
        return(
            <div>
                <h3>Get That Dog Challenge!</h3>
                <img className='doggos' src={this.state.url} alt='' />
                <br />
                <br />
                <button onClick={this.componentDidMount}>New Random Dog?</button>
            </div>
        )
    }
};

export default DogIndex;