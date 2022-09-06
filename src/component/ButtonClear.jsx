import React from 'react';
import '../style/css/buttonClear.css';

const ButtonClear = (props) => (
    <div className='button-clear' onClick={props.handleClear}>
        Clear
    </div>
);

export default ButtonClear;