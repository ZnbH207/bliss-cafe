import Header from "../components/Header";
import Footer from "../components/Footer";

import cafe from "../assets/images/cafe.png";
import ingredients from "../assets/images/ingrediants.png";
import fresh from "../assets/images/fresh.png";
import cozy from "../assets/images/cozy.png";
import staff from "../assets/images/staff.png";

function About() {
  return (
    <>
      <Header />

      <div className="about-container">
        <img src={cafe} alt="BLISS CAFE" className="cafe" />

        <h1>About Us</h1>

        <p className="box">
          Bliss is your little corner of comfort to sip, savor, and smile. We
          believe the best days start with a moment of stillness. Here, the
          world fades into the background, leaving just you, an exquisite brew,
          and a genuine sense of bliss.
        </p>

        <h1>Why Choose Us</h1>

        <div className="features">
          <div className="feature-box">
            <img src={ingredients} alt="Ingredients" className="icon" />

            <h3>Premium Ingredients</h3>

            <p>
              We use only high-quality ingredients to ensure the best taste.
            </p>
          </div>

          <div className="feature-box">
            <img src={fresh} alt="Fresh" className="icon" />

            <h3>Freshly Prepared Daily</h3>

            <p>All our drinks and desserts are made fresh every single day.</p>
          </div>

          <div className="feature-box">
            <img src={cozy} alt="Cozy" className="icon" />

            <h3>Cozy Atmosphere</h3>

            <p>A warm and relaxing place to enjoy your coffee time.</p>
          </div>

          <div className="feature-box">
            <img src={staff} alt="Staff" className="icon" />

            <h3>Friendly Staff</h3>

            <p>Our team is always ready to welcome you with a smile.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
