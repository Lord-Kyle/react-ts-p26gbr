import React from "react";
import "./AServicePage.css";
// import { Link } from "react-router-dom";

class AServicePage extends React.Component {
  render() {
    return (
      <div className="a-service-page">
        <div className="ui stackable grid container">
          <div className="five wide left aligned column">
            <div className="ui card">
              <div className="image">
                <img
                  alt="service"
                  src="./logo512.png"
                  style={{ justifyContent: "left" }}
                />
              </div>
            </div>
          </div>
          <div className="six wide centered column">
            <h1>Painting Class</h1>
            <div class="ui divider"></div>
            <div className="ui two column grid">
              <div className="two wide column">Price: </div>
              <div className="one wide column">$20</div>
            </div>
            <div className="ui grid">
              <div className="three wide column">Instructor: </div>
              <div className="seven wide column">Devon Acree-Meza</div>
            </div>
            <div className="ui hidden horizontal divider" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="ui segment five wide column ">
            <div className="select-area">
              <h1>Select a date</h1>
              <select
                className="ui fluid search selection dropdown"
                id="search-select"
              >
                <option>03/21/2021</option>
                <option>04/21/2021</option>
                <option>05/21/2021</option>
                <option>06/21/2021</option>
                <option>07/21/2021</option>
                <option>08/21/2021</option>
              </select>
              <h1>Select a time</h1>
              <select
                className="ui fluid search selection dropdown"
                id="search-select"
              >
                <option>10:00am</option>
                <option>11:00am</option>
                <option>12:00pm</option>
                <option>1:00pm</option>
                <option>2:00pm</option>
                <option>3:00pm</option>
              </select>
              <div className="checkout-button">
                <div className="ui custom button">
                  <i className="shop icon" />
                  {/* <Link to="/checkout">Checkout</Link> */}
                </div>
                <div class="ui custom popup top left transition hidden">
                  I'm not on the same level as the button, but i can still be
                  found.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AServicePage;
