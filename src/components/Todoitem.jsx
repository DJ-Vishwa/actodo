function TodoItem(props)
{
    const activity = props.activity
    const setactivity= props.setactivity
    
    function Handledelete(deleted){
        var temparr=activity.filter(function(item){
            if(item.id === deleted)
            {
                return false
            }
            else{
                return true
            }
        })

        setactivity(temparr)

    }
    return(
        <div className="flex justify-between"> 
        <p>{props.index+1}.{props.item.activity}</p>
        <button className="text-red-500" onClick={()=>Handledelete(props.id)}>Delete</button>
        </div>

    )
}

export default TodoItem