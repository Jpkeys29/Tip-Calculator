
export default function SelectPercent({children}) {
    return(
        <div>
            <label>{children}</label>
            <select>
                <option>Dissatisfied (0%)</option>
                <option>It was okay (5%)</option>
                <option>It was good (10%) </option>
                <option>Absolutely amazing! (20%)</option>
            </select>
        </div>
    );
}

