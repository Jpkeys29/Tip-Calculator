import SelectPercent from "./SelectPercent";
import Button from "./Button";
import Bill from "./Bill";
import Output from "./output";
import { useState } from "react";

export default function Total() {
    const [cuenta, setCuenta ] = useState("");
    const [mypercent, setMyPercent] = useState(0);
    const [friendpercent, setFriendPercent] = useState(0);
    return(
        <div className="statements">
            <Bill cuenta={cuenta} onSetCuenta={setCuenta} />
            <SelectPercent percent={mypercent} onSelect={setMyPercent} >How did you like the service?</SelectPercent>
            <SelectPercent percent={friendpercent} onSelect={setFriendPercent} >How did your friend like the service?</SelectPercent>
            <Output cuenta={cuenta} percent={mypercent} friendpercent={friendpercent} />
            <div><Button /></div>        
        </div>
    );
}



