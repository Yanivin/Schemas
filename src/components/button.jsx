import React from 'react';

const Button = ({ content, children }) => {
    return (
        <button className={content} tabIndex={content === "login" || content === "login" ? "-1" : "0"}>
            <p className={`${content}-text`}>{children}</p>
        </button>
    )
}

export default Button;