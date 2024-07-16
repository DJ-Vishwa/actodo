import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Navigate } from "react-router-dom"

function Login(props)
{
    const navigate = useNavigate()
    const[eusername,setusername] = useState()
    const[epassword,setpassword] = useState()
    const [ruser,setruser] = useState(true)

    const users = props.users

    
function Checkusers()
{
    var userfound = false
    users.forEach(function(item)
{
    if(item.Username === eusername && item.Password === epassword)
    {
        console.log("Login SucessFul")
        userfound=true
        navigate("/Landing",{state:{user:eusername}})
    }    
})
if(userfound === false)
{
    console.log("Login Failed")
    setruser(false)
}
}

function HandleUserinput(evt)
{
    setusername(evt.target.value)
}

function HandlePasswordinput(evt)
{
    setpassword(evt.target.value)
}



    return(
    <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">

            
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            {ruser?<p>I help you manage your activites after you login :)</p>:<p className="text-red-600">Please Singup Before Login</p>}
            

            <div className="flex flex-col gap-2 my-2">
                <input onChange={HandleUserinput} type="text" placeholder="Username" className="w-52 border-black p-1 bg-transparent border rounded-md"></input>
            </div>
            <div className="flex flex-col gap-2 my-2">
                <input onChange={HandlePasswordinput} type="text" placeholder="Password" className="w-52 border-black p-1 bg-transparent border rounded-md"></input>
            </div>
            
            <button onClick={Checkusers} className="bg-[#8272DA] w-24 p-1 rounded-md"> 
                Login
            </button>
            <p className="my-2">Don't have an account? <Link to={"/Signin"} className="underline">Signin</Link></p>
            
        </div>
    </div>
    )
}

export default Login
