import Header from "../components/Header";
import Card from "../components/card";
import Todocontainer from "../components/Todocontainer";
import { useLocation } from "react-router-dom"

function LandingPage()
{
    const data = useLocation()
    
    return(
        <div className='bg-black p-10'>
      <div className='bg-[#EFEFEF] p-10 border rounded-md'>
      <Header username={data.state.user}></Header>
      
      <div className='flex justify-between gap-5 my-5 flex-wrap'>
        <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}></Card>
        <Card bgcolor={"#FD6663"} title={"July"} subtitle={"12:05 Pm"}></Card>
        <Card bgcolor={"#FCA201"} title={"Date"} subtitle={"Friday"}></Card>
      </div>
      
      <Todocontainer></Todocontainer>
      
      </div>
      </div>
    
  );
    
}

export default LandingPage
