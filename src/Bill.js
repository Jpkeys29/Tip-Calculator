import { useState } from "react";

export default function Bill({cuenta, onSetCuenta }){
    return(
        <div >
            {/* <label>How much was the bill?</label>
            <input type="text" placeholder="Bill value" /> */}
            <label htmlFor="input1" >How much was the bill?</label>
            <input id="input1" name="input1" value={cuenta} onChange={e => onSetCuenta(Number(e.target.value))} ></input>
        </div>
    );
}
