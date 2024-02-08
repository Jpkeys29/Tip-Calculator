import { useState } from "react";

export default function Button({onReset}) {
    return(
        <div>
            <button onClick={onReset}>Reset</button> 
        </div>
    )
}

