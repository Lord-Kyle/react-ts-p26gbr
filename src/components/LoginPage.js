import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column login-col">
          <h2 className="ui blue image header">
            <img alt="login" src="./logo512.png" className="login image" />
            <div className="content">Log-in to your account</div>
          </h2>
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail address"
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="ui fluid large blue submit button">Login</div>
            </div>

            <div className="ui error message"></div>
          </form>

          <div className="ui message">
            New to us? <Link to="signup">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
