import React from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Checkbox,
  Form,
} from "semantic-ui-react";

function EmployeeModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<i className="ui icon edit"></i>}
    >
      <Modal.Header>Manage Employees</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
          wrapped
        />
        <Modal.Description>
          <Header>Caroline Brown</Header>
          <Form>
            <Form.Field>
              <label>ID</label>
              <input placeholder="123" />
            </Form.Field>
            <Form.Field>
              <label>First Name</label>
              <input placeholder="Caroline" />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder="Brown" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="Employee" />
              <Checkbox label="Volunteer" />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Confirm"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default EmployeeModal;
