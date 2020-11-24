import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children, dismissible }) => {
  const [show, setShow] = React.useState(true);

  return (
    <Alert
      dismissible={dismissible}
      onClick={() => setShow(false)}
      show={show}
      variant={variant}
    >
      {children}
    </Alert>
  );
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
