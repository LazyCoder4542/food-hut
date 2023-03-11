import './App.sass';
import * as SVG from './components/svg'
function App() {
  return (
    <div className="App">
      <section id="intro">
        <div>
          <div className="badge1">
            <span><SVG.Heart/></span>
            <span>People Trust us</span>
          </div>
          <header>
            <h1>We're <span>Serious</span> For <span>Food</span> & <span>Delivery<SVG.DecoreLine/></span>.</h1>
            <p className="tagline">Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
          </header>
          <div className="search">
            <span><SVG.SearchIcon/></span>
            <span>
              <input type="text" name="search" id="search" placeholder="Search food"/>
            </span>
            <span><SVG.SearchIcon/></span>
          </div>
          <div className="call-to-action">
            <div className="button">Download App</div>
            <div>
              <span><SVG.PlayIcon/></span>
              <span>Watch Video</span>
            </div>
          </div>
        </div>
        <div>
          <span><SVG.Hero/></span>
          <span><SVG.Float1/></span>
          <span><SVG.Float2/></span>
        </div>
        <span>
          <SVG.Slider/>
        </span>
      </section>
      <section id="special-offer">
        <header>
          <h2>Today <span>Special</span> Offers</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nam quis! Aliquid est blanditiis aliquam totam illo rem numquam minus!</p>
        </header>
        <div>

        </div>
      </section>
      <section id="services">
        <div>
          <header>
            <h2>We are <span>more</span> than <span>multiple</span> service</h2>
            <p>This is a type of restaurant which typically serves food and drink, in addition to light refreshments such as baked goods or snacks.</p>
          </header>
          <div>
            <ul>
              <li>
                <span><SVG.OrderIcon/></span>
                <span>Online Order</span>
              </li>
              <li>
                <span><SVG.Icon24hr/></span>
                <span>24/7 Service</span>
              </li>
              <li>
                <span><SVG.Calendar/></span>
                <span>Pre-Reservation</span>
              </li>
              <li>
                <span><SVG.Calendar/></span>
                <span>Organized Foodhut Place</span>
              </li>
              <li>
                <span><SVG.Calendar/></span>
                <span>Super Chef</span>
              </li>
              <li>
                <span><SVG.Calendar/></span>
                <span>Clean Kitchen</span>
              </li>
            </ul>
            <span className="button">About Us</span>
          </div>
        </div>
      </section>
      <section id="menu">
        <header>
          <h2><span>Menu</span> That <span>Always</span> Make You Fall In <span>Love</span></h2>
        </header>
        <div></div>
      </section>
      <section id="app">
        <header>
          <h2>It's Now <span>More Easy</span> to <span>Order</span> by Our Mobile <span>App</span></h2>
        </header>
        <p>All you need to do is downlode one of the best delivery apps, make a and most companies are opting  for mobile app devlopment for food delivery</p>
        <div>
          <span><SVG.GooglePlay/></span>
          <span><SVG.Applestore/></span>
        </div>
      </section>
    </div>
  );
}

export default App;
