import React from 'react';
import ButtonLoader from './ButtonLoader';
import { Button } from 'react-bootstrap';

const SubmitButton = ({ isPending = false, onClick, text = 'Save', className = 'm-2', size }) => {
    return (
        <Button
            variant="primary"
            disabled={isPending}
            type="submit"
            className={className}
            onClick={onClick}
            size={size}
        >
            <ButtonLoader loading={isPending} text={text} />
        </Button>
    );
};

export default SubmitButton;
