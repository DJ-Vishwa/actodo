import { Link, Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"
import {navigate} from "react-router-dom"


function Signin(props)
{
    const navigate=useNavigate()
    const[eusername,setusername] = useState()
    const[epassword,setpassword] = useState()


    const users = props.users
    const setusers = props.setusers

function HandleUserinput(evt)
{
    setusername(evt.target.value)
}

function HandlePasswordinput(evt)
{
    setpassword(evt.target.value)
}

function Adduser()
{
    setusers([...users,{Username:eusername,Password:epassword}])
    navigate("/")
}


    return(
    <div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">

            
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            <p>Signup Here :)</p>
            <div className="flex flex-col gap-2 my-2">
                <input onChange={HandleUserinput} type="text" placeholder="Username" className="w-52 border-black p-1 bg-transparent border rounded-md"></input>
            </div>
            <div className="flex flex-col gap-2 my-2">
                <input onChange={HandlePasswordinput} type="text" placeholder="Password" className="w-52 border-black p-1 bg-transparent border rounded-md"></input>
            </div>
            <div className="flex flex-col gap-2 my-2">
                <input type="text" placeholder="Confirm Password" className="w-52 border-black p-1 bg-transparent border rounded-md"></input>
            </div>
            <button onClick={Adduser} className="bg-[#24e9cf] w-24 p-1 rounded-md"> 
                Signup
            </button>
            <p className="my-2">Already have an account? <Link to={"/"} className="underline">Login</Link></p>
            
        </div>
    </div>
    )
}

export default Signin