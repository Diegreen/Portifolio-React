import { TechCards } from "./TechCards"
import { technologies } from "../../data/technologies"

export const TechSection = () => {
    return (
        <>
          <h2>TechSection</h2>
           <ul>
               <TechCards title="HTML" />
               <TechCards title="REACT" />
               <TechCards title="CSS" />
               <TechCards title="JAVASCRIPT" />
           </ul>
        </>
    )
}