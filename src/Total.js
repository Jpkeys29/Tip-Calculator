import SelectPercent from "./SelectPercent";
import Button from "./Button";
import Bill from "./Bill";

export default function Total() {
    return(
        <div className="statements">
            <Bill />
            <SelectPercent />
            <SelectPercent />
            <div><Button /></div>        
        </div>
    );
}

