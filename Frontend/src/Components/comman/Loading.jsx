import React from 'react';
import {Spinner} from 'react-bootstrap'
const Loading = () => {
    return (
        <div className="text-center mt-26">
        <Spinner animation="border" role="status">
          <span className="">Loading...</span>
        </Spinner>
      </div>
    );
}

export default Loading;
