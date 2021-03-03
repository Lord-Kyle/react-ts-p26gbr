import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="pusher">
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted header">Best Community Service</h1>
          <h2>
            A non-profit organization benefiting a small community by providing
            services to the local community.
          </h2>
          <div className="ui huge primary button">
            Donate <i className="right arrow icon"></i>
          </div>
        </div>
      </div>

      <div className="ui vertical stripe segment">
        <div className="ui middle aligned stackable grid container">
          <div className="row">
            <div className="eight wide column">
              <h3 className="ui header">We Help Communities</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <h3 className="ui header">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="six wide right floated column">
              <img
                src="./logo512.png"
                className="ui large bordered rounded image"
                alt="white"
              />
            </div>
          </div>
          <div className="row">
            <div className="center aligned column">
              <Link to="/" className="ui huge button">
                Check Them Out
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="ui vertical stripe quote segment">
        <div className="ui equal width stackable internally celled grid">
          <div className="center aligned row">
            <div className="column">
              <h3>"What a Company"</h3>
              <p>That is what they all say about us</p>
            </div>
            <div className="column">
              <h3>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </h3>
              <p>
                <img
                  src="./logo512.png"
                  className="ui avatar image"
                  alt="avatar"
                />
                <b>Nan</b> Chief Fun Officer Acme Toys
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ui vertical stripe segment">
        <div className="ui text container">
          <h3 className="ui header">Breaking The Grid, Grabs Your Attention</h3>
          <p>
            Instead of focusing on content creation and hard work, we have
            learned how to master the art of doing nothing by providing massive
            amounts of whitespace and generic content that can seem massive,
            monolithic and worth your attention.
          </p>
          <Link to="/" className="ui large button">
            Read More
          </Link>
          <h4 className="ui horizontal header divider">
            <Link to="/" href="/">
              Case Studies
            </Link>
          </h4>
          <h3 className="ui header">Did We Tell You About Our Bananas?</h3>
          <p>
            Yes I know you probably disregarded the earlier boasts as
            non-sequitur filler content, but its really true. It took years of
            gene splicing and combinatory DNA research, but our bananas can
            really dance.
          </p>
          <Link to="/" className="ui large button">
            I'm Still Quite Interested
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
