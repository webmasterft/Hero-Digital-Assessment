import React, {Fragment} from "react";

const ErrorMessage = (props) => {
    return (
        <Fragment>
            {props.name &&
            <p className='error'>
                {props.name} is required 
            </p>}
            {props.message &&
            <p className='error'>
                {props.message}
            </p>
            }
        </Fragment>
    )
}

export default ErrorMessage;