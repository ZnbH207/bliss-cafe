import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import espresso from "../assets/images/espresso.png";
import cappuccino from "../assets/images/cappuccino.png";
import latte from "../assets/images/latte.png";
import americano from "../assets/images/americano.png";
import hotChocolate from "../assets/images/hot chocolate.png";

import strawberrySmoothie from "../assets/images/strawberry smoothie.png";
import mangoSmoothie from "../assets/images/mango smoothie.png";
import oreoMilkshake from "../assets/images/oreo milkshake.png";
import frappe from "../assets/images/frappe.png";
import icedLatte from "../assets/images/iced latte.png";

import cheesecake from "../assets/images/cheesecake.png";
import brownies from "../assets/images/brownies.png";
import croissant from "../assets/images/croissant.png";
import cookies from "../assets/images/cookies.png";
import tiramisu from "../assets/images/tiramisu.png";

function Menu() {
  const [popup, setPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const addToOrder = (item) => {
    setSelectedItem(item);
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
  };

  return (
    <>
      <Header />

      <div className="title">
        <h1>Our Menu</h1>
      </div>

      <div className="menu-nav">
        <a href="#hot">Hot Drinks</a>
        <a href="#cold">Cold Drinks</a>
        <a href="#desserts">Desserts</a>
      </div>

      <div className="section" id="hot">
        <h2>Hot Drinks</h2>

        <div className="grid">
          <div className="card">
            <img src={espresso} alt="Espresso" />
            <h3>Espresso</h3>
            <p>$2.50</p>
            <button className="btn" onClick={() => addToOrder("Espresso")}>
              Order Now
            </button>
          </div>

          <div className="card">
            <img src={cappuccino} alt="Cappuccino" />
            <h3>Cappuccino</h3>
            <p>$4.50</p>
            <button className="btn" onClick={() => addToOrder("Cappuccino")}>
              Order Now
            </button>
          </div>

          <div className="card">
            <img src={latte} alt="Latte" />
            <h3>Latte</h3>
            <p>$4.50</p>
            <button className="btn" onClick={() => addToOrder("Latte")}>
              Order Now
            </button>
          </div>

          <div className="card">
            <img src={americano} alt="Americano" />
            <h3>Americano</h3>
            <p>$3.50</p>
            <button className="btn" onClick={() => addToOrder("Americano")}>
              Order Now
            </button>
          </div>

          <div className="card">
            <img src={hotChocolate} alt="Hot Chocolate" />
            <h3>Hot Chocolate</h3>
            <p>$4.50</p>
            <button className="btn" onClick={() => addToOrder("Hot Chocolate")}>
              Order Now
            </button>
          </div>
        </div>
      </div>

      <div className="section" id="cold">
        <h2>Cold Drinks</h2>

        <div className="grid">
          <div className="card">
            <img src={strawberrySmoothie} alt="Strawberry Smoothie" />
            <h3>Strawberry Smoothie</h3>
            <p>$5.50</p>
            <button
              className="btn"
              onClick={() => addToOrder("Strawberry Smoothie")}
            >
              Order Now
            </button>
          </div>

          <div className="card">
            <img src={mangoSmoothie} alt="Mango Smoothie" />
            <h3>Mango Smoothie</h3>
            <p>$5.50</p>
            <button
              className="btn"
              onClick={() => addToOrder("Mango Smoothie")}
            >
              Order Now
            </button>
          </div>

          <div className="card">
            <img src={oreoMilkshake} alt="Oreo Milkshake" />
            <h3>Oreo Milkshake</h3>
            <p>$6.00</p>
            <button
              className="btn"
              onClick={() => addToOrder("Oreo Milkshake")}
            >
              Order Now
            </button>
          </div>

          <div className="card">
            <img src={frappe} alt="Caramel Frappe" />
            <h3>Caramel Frappe</h3>
            <p>$4.50</p>
            <button
              className="btn"
              onClick={() => addToOrder("Caramel Frappe")}
            >
              Order Now
            </button>
          </div>

          <div className="card">
            <img src={icedLatte} alt="Iced Latte" />
            <h3>Iced Latte</h3>
            <p>$4.50</p>
            <button className="btn" onClick={() => addToOrder("Iced Latte")}>
              Order Now
            </button>
          </div>
        </div>
      </div>

      <div className="section" id="desserts">
        <h2>Desserts</h2>

        <div className="grid">
          <div className="card">
            <img src={cheesecake} alt="Cheese Cake" />
            <h3>Cheese Cake</h3>
            <p>$6.00</p>
            <button className="btn" onClick={() => addToOrder("Cheese Cake")}>
              Order Now
            </button>
          </div>

          <div className="card">
            <img src={brownies} alt="Brownies" />
            <h3>Brownies</h3>
            <p>$4.50</p>
            <button className="btn" onClick={() => addToOrder("Brownies")}>
              Order Now
            </button>
          </div>

          <div className="card">
            <img src={croissant} alt="Croissant" />
            <h3>Croissant</h3>
            <p>$3.00</p>
            <button className="btn" onClick={() => addToOrder("Croissant")}>
              Order Now
            </button>
          </div>

          <div className="card">
            <img src={cookies} alt="Cookies" />
            <h3>Cookies</h3>
            <p>$2.50</p>
            <button className="btn" onClick={() => addToOrder("Cookies")}>
              Order Now
            </button>
          </div>

          <div className="card">
            <img src={tiramisu} alt="Tiramisu" />
            <h3>Tiramisu</h3>
            <p>$5.50</p>
            <button className="btn" onClick={() => addToOrder("Tiramisu")}>
              Order Now
            </button>
          </div>
        </div>
      </div>

      {popup && (
        <div className="popup">
          <div className="popup-content">
            <p>✓ {selectedItem} added to order!</p>

            <button onClick={closePopup}>OK</button>
          </div>
        </div>
      )}

      <div className="back-to-top">
        <a href="#top" className="btn">
          Back to Top
        </a>
      </div>

      <Footer />
    </>
  );
}

export default Menu;
