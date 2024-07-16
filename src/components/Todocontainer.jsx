import Addtodo from "./Addtodoform"
import Todolist from "./todolist"
import { useState } from "react"

function Todocontainer()
{
    const[activity,setactivity] = useState([
        {
          id:1,
          activity:"Wake Up"
        },
        {
          id:2,
          activity:"Go For A Walk"
        },
        {
          id:3,
          activity:"Take A cup Of Tea"
        }
      ])
      

    return(
    <div>
        <div className="flex gap-5 flex-wrap">
            <Addtodo activity={activity} setactivity={setactivity}></Addtodo>
            <Todolist activity={activity} setactivity={setactivity}></Todolist>
        </div>
    </div>
          )
}

export default Todocontainer