import React from 'react';
import { Jumbotron, } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Tech Jobs</h1>
        <p className="lead">Search for technology opportunities near you!</p>
        <hr className="my-2" />
        <p>This application is powered by a GitHub API</p>
        {/* <p className="lead">
          <Button color="primary">Learn More</Button>
        </p> */}
      </Jumbotron>
    </div>
  );
};

export default Example;