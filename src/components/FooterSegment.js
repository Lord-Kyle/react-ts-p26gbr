import React from "react";
import { Link } from "react-router-dom";

const FooterSegment = () => {
  return (
    <div className="pusher">
      <div className="ui inverted vertical footer segment">
        <div className="ui container">
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="three wide column">
              <h4 className="ui inverted header">About</h4>
              <div className="ui inverted link list">
                <Link to="/home" className="item">
                  Sitemap
                </Link>
                <Link to="/home" className="item">
                  Contact Us
                </Link>
                <Link to="/home" className="item">
                  Events
                </Link>
                <Link to="/home" className="item">
                  Plans
                </Link>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Services</h4>
              <div className="ui inverted link list">
                <Link to="/home" className="item">
                  Temporary
                </Link>
                <Link to="/home" className="item">
                  FAQ
                </Link>
                <Link to="/home" className="item">
                  How To Access
                </Link>
                <Link to="/home" className="item">
                  Favorites
                </Link>
              </div>
            </div>
            <div className="seven wide column">
              <h4 className="ui inverted header">Footer Header</h4>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSegment;
