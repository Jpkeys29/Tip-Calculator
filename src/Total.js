import SelectPercent from "./SelectPercent";
import Button from "./Button";
import Bill from "./Bill";

export default function Total() {
    return(
        <div className="statements">
            <Bill />
            <SelectPercent>How did you like the service?</SelectPercent>
            <SelectPercent>How did your friend like the service?</SelectPercent>
            <div><Button /></div>        
        </div>
    );
}

