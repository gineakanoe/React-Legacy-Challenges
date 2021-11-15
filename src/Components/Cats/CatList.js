import React from 'react';
 
const CatList = (props) => {
  console.log(props);

 return (
   <div>
     {props.cats.map((cat) => <li key={cat}>{cat}</li> )}
   </div>
 )
}
 
export default CatList;
