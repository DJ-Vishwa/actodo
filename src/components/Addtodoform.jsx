import { useState } from "react"

function Addtodo(props)
{
  const activity = props.activity
  const Setactivity = props.setactivity

  const [newactivity,SetNewactivity]= useState("")

  function Handlechange(evt)
  {
    SetNewactivity(evt.target.value)
  }

  function ButtonChange()
  {
    Setactivity([...activity,{id:activity.length+1,activity:newactivity}])
    SetNewactivity("")
  }

   return(
        <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Manage Activity</h1>

        <div>
        <input value={newactivity} onChange={Handlechange} className="border border-black my-3 bg-transparent" placeholder="Next Activity?" type="text"></input>
        <button onClick={ButtonChange} className="bg-black text-white border border-black " >Add</button>
        </div>
        
      </div>
    )
}


export default Addtodo