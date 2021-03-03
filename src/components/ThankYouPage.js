import React from "react";

class ThankYouPage extends React.Component {
  render() {
    return (
      <div className="ui center aligned grid">
        <div className="ui segment " style={{ marginBottom: "2em" }}>
          <h1 className="ui center aligned icon header">
            <i className="circular shopping bag icon" />
            Thank You!
          </h1>
          <h3>
            You are registered for Art Class on 3/21/2021 at 12:30pm with Devon
            Acree-Meza
          </h3>
          <h4>Our address is: 1234 W. Street Ln. 86730 Aspen, CO</h4>
        </div>
      </div>
    );
  }
}

export default ThankYouPage;
