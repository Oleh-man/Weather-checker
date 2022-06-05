import React, { useState } from "react";

const SwitchSystem = (props) => {
    const [celsBg, setCel] = useState('system-active');
    const [farBg, setFar] = useState('system-disabled');

    const changeBG = () => {
        if (celsBg === 'system-active') {
            setCel('system-disabled');
            setFar('system-active');
        } else {
            setFar('system-disabled');
            setCel('system-active');
        };
    };

    return (
        <div className="change-system" onClick={props.changeTempSystem}>
            <button onClick={changeBG} className={"system-btn " + celsBg}>&deg;C</button>
            <button onClick={changeBG} className={"system-btn " + farBg}>&deg;F</button>
        </div>
    );
};

export default SwitchSystem;