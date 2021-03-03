import React from "react";

class ThankYouPageDonation extends React.Component {
  render() {
    return (
      <div className="ui center aligned grid">
        <div className="ui segment " style={{ marginBottom: "2em" }}>
          <h1 className="ui center aligned icon header">
            <i className="circular shopping bag icon" />
            Thank You!
          </h1>
          <h3>Your donation is greatly appreciated</h3>
        </div>
      </div>
    );
  }
}

export default ThankYouPageDonation;
