import React from 'react';
import { Spinner } from 'react-bootstrap';

const PageLoading = ({ className, layout }) => {
  return (
    <>
      {layout ? (
        <div className={`text-center text-primary ${className ? className : ""}`}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className={`text-center text-primary ${className ? className : "mt-26"}`}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </>
  );
};

export default PageLoading;
