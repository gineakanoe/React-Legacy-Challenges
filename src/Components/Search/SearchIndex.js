import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {

  constructor(props){
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      term: '',
    }
 }

  searchFunction = (e) => {
  this.setState({
    term: e.target.value,
  })
 }



 render() {
   return(
     <div>
      <Input type='text' onChange={this.searchFunction} placeholder='Search Here' value={this.state.term} />
      <h3>Results:</h3>
      <TermResult things={this.state.things.filter(result => result.includes(this.state.term))} />
     </div>
   )
 };
};


const TermResult = (props) => {
  console.log(props);

 return (
   <div>
     {props.things.map((thing) => <li key={thing}>{thing}</li> )}
   </div>
 )
}

export default SearchIndex;
