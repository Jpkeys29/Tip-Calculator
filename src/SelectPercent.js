import { useState } from "react";


export default function SelectPercent({children, percent, onSelect}) {
    return(
        <div>
            <label>{children}</label>
            <select value={percent} onChange={e => onSelect(Number(e.target.value))} >
                <option >Dissatisfied (0%)</option>
                <option >It was okay (5%)</option>
                <option >It was good (10%) </option>
                <option >Absolutely amazing! (20%)</option>
            </select>
        </div>
    );
}

