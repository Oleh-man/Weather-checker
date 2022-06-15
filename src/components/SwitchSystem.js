import React, { useState } from "react";

const SwitchSystem = (props) => {
    const [active, setActive] = useState('cel');
    
    const handleSwitch = (sys) => {
        props.changeTempSystem();
        setActive(sys)
    }

    return (
        <div className="change-system">
            <button disabled={active === 'cel'} onClick={()=> handleSwitch('cel')} className={`system-btn ${active === "cel" ? 'system-active' : 'system-disabled'}`}>&deg;C</button>
            <button disabled={active === 'far'} onClick={()=> handleSwitch('far')} className={`system-btn ${active === "far" ? 'system-active' : 'system-disabled'}`}>&deg;F</button>
        </div>
    );
};

export default SwitchSystem;