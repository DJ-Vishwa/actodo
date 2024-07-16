import { useState } from "react"
import TodoItem from "./Todoitem"


function Todolist(props)
{

  const activity = props.activity
  const setactivity = props.setactivity
    
  
  return(
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
        <h1 className="text 3xl: font-bold ">Today Activity</h1>
        
        {activity.length===0?<p>You Haven't added anything yet</p>:""}
        {
          activity.map(function(item,index){
            return<TodoItem id={item.id} item={item} index={index} activity={activity}  setactivity={setactivity} ></TodoItem>
          })
        }
      </div>
    )
}

export default Todolist