import React from 'react';
import { Spinner } from 'react-bootstrap';

const ButtonLoading = ({ loading, text }) => (
    <>
        {loading ? (
            <>
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                {" Loading . . . "}
            </>
        ) : text ? text : "Save"}
    </>
);

export default ButtonLoading;
