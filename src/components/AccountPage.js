import React from "react";
import SideBar from "./SideBar";

class AccountPage extends React.Component {
  render() {
    return (
      <div>
        <div className="ui mobile only padded grid"></div>
        <div className="ui padded grid">
          <SideBar activePage="employee" />
          <div
            className="sixteen wide mobile thirteen wide tablet thirteen wide computer right floated column"
            id="content"
          >
            <div className="ui padded grid">
              <div className="center aligned ">
                <div className="eight wide mobile four wide tablet four wide computer column">
                  <img
                    alt="profile avatar"
                    className="ui  small image"
                    src="./logo512.png"
                  />
                  <div className="ui hidden divider"></div>

                  <div className="ui two column grid">
                    <div className="column">
                      <h2>Jayne Johnson</h2>
                    </div>
                    <div className="column">
                      <i className="ui  icon edit" />
                    </div>
                  </div>
                  <div className="ui section divider"></div>

                  <div className="ui two column grid">
                    <div className="column">
                      <h3>Email</h3>
                    </div>
                    <div className="column">
                      <i className="ui  icon edit" />
                    </div>
                  </div>
                  <h4>something_email@domain.com</h4>
                  <div className="ui section divider" />
                  <h1>History</h1>
                  <div>
                    <table className="ui celled table">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Type</th>
                          <th>Host</th>
                          <th>Location</th>
                          <th>Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Date">3/21/2021</td>
                          <td data-label="Type">Donation</td>
                          <td data-label="Host"></td>
                          <td data-label="Location"></td>
                          <td data-label="Notes">$100</td>
                        </tr>
                        <tr>
                          <td data-label="Date">2/21/2021</td>
                          <td data-label="Type">Donation</td>
                          <td data-label="Host"></td>
                          <td data-label="Location"></td>
                          <td data-label="Notes">$100</td>
                        </tr>
                        <tr>
                          <td data-label="Date">1/21/2021</td>
                          <td data-label="Type">Donation</td>
                          <td data-label="Host"></td>
                          <td data-label="Location"></td>
                          <td data-label="Notes">$100</td>
                        </tr>
                        <tr>
                          <td data-label="Date">12/21/202</td>
                          <td data-label="Type">Class</td>
                          <td data-label="Host">Devon Acree-Meza</td>
                          <td data-label="Location">OnSite</td>
                          <td data-label="Notes">Art-Class (001-1423)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountPage;
