import Header from "../components/Header";
import Footer from "../components/Footer";

import aboutLogo from "../assets/images/about-logo.png";
import cold from "../assets/images/cold.png";
import desserts from "../assets/images/desserts.png";
import coffee from "../assets/images/coffee.png";
import hot from "../assets/images/hot.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />

      <section className="top-section">
        <h2>“Where Every Cup Brings a Little Bliss”</h2>

        <img src={aboutLogo} alt="BLISS CAFE Logo" className="pic" />
      </section>

      <section className="welcome">
        <h2>Welcome to BLISS CAFE!</h2>
        <hr className="line" />
      </section>

      <section className="gallery">
        <img src={cold} alt="Cold Drinks" className="gallery-image" />

        <img src={desserts} alt="Desserts" className="gallery-image" />

        <img src={coffee} alt="Coffee Shop" className="gallery-image" />

        <img src={hot} alt="Hot Drinks" className="gallery-image" />
      </section>

      <section className="buttons">
        <Link to="/menu" className="btn">
          Menu
        </Link>

        <Link to="/about" className="btn">
          About Us
        </Link>

        <Link to="/contact" className="btn">
          Contact Us
        </Link>
      </section>

      <Footer />
    </>
  );
}

export default Home;
