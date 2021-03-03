import React from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Checkbox,
  Form,
} from "semantic-ui-react";

function ModalComponentService() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<i className="ui icon edit"></i>}
    >
      <Modal.Header>Manage Service</Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src="http://clipart-library.com/img/1464517.gif"
          wrapped
        />
        <Modal.Description>
          <Header>Art Class</Header>
          <Form>
            <Form.Field>
              <label>ID</label>
              <input placeholder="123" />
            </Form.Field>
            <Form.Field>
              <label>#</label>
              <input placeholder="10001" />
            </Form.Field>
            <Form.Field>
              <label>Title</label>
              <input placeholder="Art Class" />
            </Form.Field>
            <Form.Field>
              <label>Host</label>
              <input placeholder="Captain Marvel" />
            </Form.Field>
            <Form.Field>
              <label>Price</label>
              <input placeholder="$100" />
            </Form.Field>
            <Form.Field>
              <label>Location</label>
              <input placeholder="Ipsum" />
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

export default ModalComponentService;
