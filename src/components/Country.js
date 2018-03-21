import React from 'react';
// import Header from "./Header";




// class Country extends React.Component {
//     state = {
//         country: "France"
//     }
//     render() { 
//         return <div>
//             <Header />
//             <h1>Welcome to {this.state.country}</h1>
//           </div>;
//     }
// }

 
// export default Country;
export default ({ match : { params: { name}}}) =>
    <h1>Welcome to {name}</h1>
