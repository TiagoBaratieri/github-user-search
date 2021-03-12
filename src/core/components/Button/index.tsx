import React from 'react';
import './styles.css';

type Props = {
    text: string;
}

const Button = ({text}: Props) =>(
    <button className="home-btn btn-text">
        <h5>{text}</h5>
    </button>
);

export default Button;