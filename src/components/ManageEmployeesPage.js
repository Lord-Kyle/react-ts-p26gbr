import React from "react";
import SideBar from "./SideBar";
import Modal from "./EmployeeModal";

class ManageEmployeesPage extends React.Component {
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
              <div className="row">
                <h1 className="ui huge dividing header">Employee Management</h1>
              </div>
              <div className="row">
                <table className="ui single line striped selectable unstackable table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>ID</th>
                      <th>Position</th>
                      <th>Status</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Devon Acree-Meza</td>
                      <td>123</td>
                      <td>Employee</td>
                      <td>dolor</td>
                      <td>
                        <Modal />
                      </td>
                    </tr>
                    <tr>
                      <td>Kevin Buell</td>
                      <td>122</td>
                      <td>Employee</td>
                      <td>adipiscing</td>
                      <td>
                        <Modal />
                      </td>
                    </tr>
                    <tr>
                      <td>John Doe</td>
                      <td>1456</td>
                      <td>Volunteer</td>
                      <td>odio</td>
                      <td>
                        <Modal />
                      </td>
                    </tr>
                    <tr>
                      <td>Jane Johnson</td>
                      <td>6456</td>
                      <td>Employee</td>
                      <td>cursus</td>
                      <td>
                        <Modal />
                      </td>
                    </tr>
                    <tr>
                      <td>Batman</td>
                      <td>8987</td>
                      <td>Volunteer</td>
                      <td>Sed</td>
                      <td>
                        <Modal />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageEmployeesPage;

/*

  renderModal = () => {
    <div class="ui modal">
      <i class="close icon"></i>
      <div class="header">Profile Picture</div>
      <div class="image content">
        <div class="ui medium image">
          <img src="/images/avatar/large/chris.jpg" />
        </div>
        <div class="description">
          <div class="ui header">
            We've auto-chosen a profile image for you.
          </div>
          <p>
            We've grabbed the following image from the
            <a href="https://www.gravatar.com" target="_blank">
              gravatar
            </a>
            image associated with your registered e-mail address.
          </p>
          <p>Is it okay to use this photo?</p>
        </div>
      </div>
      <div class="actions">
        <div class="ui black deny button">Nope</div>
        <div class="ui positive right labeled icon button">
          Yep, that's me
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>;
  };


*/
