import React, { Fragment } from "react";

import './Comment.css'

export function Comment(props) {
    return <Fragment>
        <p>{props.content}</p>
    </Fragment>
}