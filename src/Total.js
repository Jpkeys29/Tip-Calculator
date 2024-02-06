import SelectPercent from "./SelectPercent";
import Button from "./Button";
import Bill from "./Bill";
import Output from "./output";
import { useState } from "react";

export default function Total() {
    const [cuenta, setCuenta ] = useState("");
    return(
        <div className="statements">
            <Bill />
            <SelectPercent>How did you like the service?</SelectPercent>
            <SelectPercent>How did your friend like the service?</SelectPercent>
            <Output />
            <div><Button /></div>        
        </div>
    );
}



