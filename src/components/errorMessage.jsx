import React, {Fragment} from "react";

const ErrorMessage = (props) => {
    return (
        <Fragment>
            <span className='error'>
                {props.name} is required
            </span>
        </Fragment>
    )
}

export default ErrorMessage;