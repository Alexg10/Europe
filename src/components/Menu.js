//REACT
import React from "react";
import data from './../data/data.json';
import Link from "react-router-dom";




class Menu extends React.Component {


  // getCountry = event => {
  //   event.preventDefault();

  //   const country = this.value;

  //   console.log(country);

  //   this.context.router.transitionTo(`/pseudo/${country}`);
  // };

  render() {
    return (
      <div className="">
        <ul className="">
          <li className="">
            <a className="" href="#">
              Home <span className="">(current)</span>
            </a>
          </li>
          <li className="">
            <a
              className=""
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Pays
            </a>
            <ul className="" aria-labelledby="navbarDropdownMenuLink">
              {data.map(function(data) {
                var name = data.name;
                console.log({ name });

                return <li key={data.id}>
                    {/* <span className="" onClick={(e) => this.getCountry(e)} >
                      {data.name}
                    </span> */}
                    <Link to={"/country/" + data.name }>{data.name}</Link>
                  </li>;
              })}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
