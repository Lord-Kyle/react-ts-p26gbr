import React from "react";
import { Link } from "react-router-dom";

class SignUpPage extends React.Component {
  render() {
    const logo = "./logo512.png";

    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column login-col">
          <h2 className="ui blue image header">
            <img src={logo} alt="sign up" className="image" />
            <div className="content">Sign Up</div>
          </h2>
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <label>First Name</label>
                <input type="text" name="First Name" />
              </div>
              <div className="field">
                <label>Last Name</label>
                <input type="text" name="Last Name" />
              </div>
              <div className="field">
                <label>Email Address</label>
                <input type="email" name="Email Address" />
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" name="Password" />
              </div>

              <div className="field">
                <div className="ui checkbox">
                  <input type="checkbox" className="hidden" />
                  <label>I agree to the Terms and Conditions</label>
                </div>
              </div>

              <div className="ui fluid large blue submit button">Submit</div>
            </div>

            <div className="ui error message"></div>
          </form>

          <div className="ui message">
            Already a member? <Link to="login">Log In</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
