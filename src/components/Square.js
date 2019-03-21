import React from 'react';

function Square(props){
    const bgColor = {
        backgroundColor: props.draw ? 'grey' : props.color
    }
    return (
        <button className="square" onClick={props.onClick} style={bgColor}>
            {props.value}
        </button>
    );
}
export default Square