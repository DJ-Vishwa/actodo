
import './App.css';
import Header from './components/Header';
import Card from './components/card';
import Todocontainer from './components/Todocontainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Signin from './pages/signin';
import LandingPage from './pages/landing';
import { useState } from 'react';


function App()
{
  const [users,setusers] = useState(
    [
        {
            Username:"Vishwa",
            Password:"Vishwa@123"
        }
    ]
)
  return(
<div>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Login users={users} setusers={setusers}></Login>}></Route>
  <Route path='/Signin' element={<Signin users={users} setusers={setusers}></Signin>}></Route>
  <Route path='/Landing' element={<LandingPage></LandingPage>}> </Route>
  </Routes>
  </BrowserRouter>
</div>
  )

}


export default App;
