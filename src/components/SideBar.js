import React from "react";
import { Link } from "react-router-dom";

// const sidebarConfig = {
//   employees: {
//     text: "",
//   },
// };

class SideBar extends React.Component {
  render() {
    return (
      <div
        className="three wide tablet only three wide computer only column"
        id="sidebar"
      >
        <div className="ui vertical borderless fluid text menu">
          <Link to="/account" className="item">
            Account
          </Link>
          <Link to="/manageservices" className="item">
            Manage Services
          </Link>
          <Link to="/manageemployees" className="item">
            Manage Employees
          </Link>

          {/* <div className="ui hidden divider"></div>
        <a className="item">Nav item</a> <a className="item">Nav item again</a>
        <a className="item">One more nav</a> <a className="item">Another nav item</a>
        <a className="item">More navigation</a>
        <div className="ui hidden divider"></div>
        <a className="item">Macintosh</a> <a className="item">Linux</a>
        <a className="item">Windows</a> */}
        </div>
      </div>
    );
  }
}

export default SideBar;
