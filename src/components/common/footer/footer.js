import React from 'react';
import { Jumbotron } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron className="footerP">
        <p className="lead">Thanks for visiting!</p>
        <hr className="my-2" />
        <p className="lead">&copy; We hope you enjoyed your stay!</p>
      </Jumbotron>
    </div>
  );
};

export default Example;