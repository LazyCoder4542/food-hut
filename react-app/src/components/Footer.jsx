import React from "react";
class Footer extends React.Component {
  render() {
    return(
      <footer id="site-footer">
        <div>
          <h3>Foodnut</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eligendi ea ad, eaque quasi deserunt.</p>
          <span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div>
          <div>
            <h4>About Us</h4>
            <ul>
              <li>About us</li>
              <li>Our Services</li>
              <li>Contact us</li>
              <li>Our Company</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>Partnership</li>
              <li>Terms of use</li>
              <li>Privacy</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur perspiciatis, totam excepturi odio sequi hic.</p>
            <div>
              <span>
                <input type="text" placeholder="Email" />
              </span>
              <span className="button">Subscribe</span>
            </div>
          </div>
        </div>
        <span>Copyright &copy; {(new Date().getFullYear())} Foodhut.</span>
      </footer>
    );
  }
}
export default Footer;