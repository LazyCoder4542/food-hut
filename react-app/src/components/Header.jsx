import React from "react";
import * as SVG from './svg'
class Header extends React.Component {
  render() {
    return(
      <header id="site-header">
        <span><SVG.Logo/></span>
        <nav>
            <ul>
                <li>Today Special Offers</li>
                <li>Why FoodHut</li>
                <li>Our Menu</li>
                <li>Our Popular Food</li>
                <li className="button">Download App</li>
            </ul>
        </nav>
      </header>
    );
  }
}
export default Header;