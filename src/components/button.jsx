import React from 'react';

const Button = ({ content, children }) => {
    return (
        <button className={content}>
            <p className={`${content}-text`}>{children}</p>
        </button>
    )
}

export default Button;