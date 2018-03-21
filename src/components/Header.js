//REACT
import React from "react";
import Menu from './Menu';
import Logo from "./Logo";
import MenuBurger from "./MenuBurger";

class Header extends React.Component {
  state = {};
  render() {
    return <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              <Logo />
            </a>
            <Menu />
            <MenuBurger />
          </nav>
        </div>
      </div>
    </div>;
  }
}

export default Header;
