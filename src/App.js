import Bill from "./Bill";
import Total from "./Total";
import SelectPercent from "./SelectPercent";
import Button from "./Button";
import './styles.css';


export default function App() {
  return(
    <div className="statements" >
      <Bill />
      <SelectPercent />
      <Total />
      <Button />
    </div>
  )
}


