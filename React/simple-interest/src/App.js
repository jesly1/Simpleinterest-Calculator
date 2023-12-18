import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  
  const[amount,changeamount]=useState(0)
  const[intrest,changeintrest]=useState(0)
  const[yeare,changeyr]=useState(0)
  const [result,changeres]=useState(0)
  const[isprinciple,changeprinciple]=useState(true)
  const[isintrest,setintrest]=useState(true)
  const[isyr,setyr]=useState(true)
  
 
  const sub=(e)=>{
    e.preventDefault()
    console.log(amount,intrest,yeare)
    const res=amount*intrest*yeare/100;
    console.log("Total intrest=",res)
    changeres(res)
  }
  const reset=()=>{
    changeamount(0)
    changeintrest(0)
    changeyr(0)
    changeres(0)
  }
  const validate=(e)=>{
   const{name,value}=e.target
   
   console.log(name,value)
   if(name === "princi"){
    changeamount(value)
    let res=(!!value.match(/^[0-9]+$/))
    if(res===true){
      changeprinciple(true)
    }else{
      changeprinciple(false)
    }
   }else if(name==="intrestie"){
    changeintrest(value)
    let res=(!!value.match(/^[0-9]+$/))
    if(res===true){
      setintrest(true)
    }else{
      setintrest(false)
    }
   }else{
    changeyr(value)
    let res=(!!value.match(/^[0-9]+$/))
    if(res===true){
      setyr(true)
    }else{
      setyr(false)
    }
   }

  }

  return (
   <>
    <div className=' d-flex justify-content-center' >
    <div className='mt-5' style={{backgroundColor:"white", width:"400px",height:"600px", textAlign:"center", alignItems:"center"}} >
      <h3 className='mt-5 fw-bold'>Simple Interest</h3>
      <h6>Calculate Your Simple Interest Simply</h6>
      <div style={{backgroundColor:"#ff9900", height:"100px",width:"250px", marginLeft:"80px", marginTop:"20px", padding:"5px"}}>
  <h3 > &#8377;{result}</h3>
 <p>Total Simple Interest</p>
      </div>
      <div className='mt-4'>
        <form action="" onSubmit={sub}>
        
          <TextField id="outlined-basic" label=" &#8377;Principle amount" variant="outlined" onChange={(e)=>validate(e)} value={amount} name='princi' />
          {
            !isprinciple&&
            <div>
              <p className='text-danger'>Invalid Amount</p>
            </div>
          }
        <br />
        <br />
        <TextField id="outlined-basic" label="Rate of interest(pa)%" variant="outlined"  onChange={(e)=>validate(e.target.value)} value={intrest} name='intrestie'/>
        {
            !isintrest&&
            <div>
              <p className='text-danger'>Invalid Amount</p>
            </div>
          }
        <br />
        <br />
        <TextField id="outlined-basic" label="Year" variant="outlined" onChange={(e)=>validate(e.target.value)} value={yeare} name="yr"/>
        {
            !isyr&&
            <div>
              <p className='text-danger'>Invalid Amount</p>
            </div>
          }
        <Stack  style={{marginLeft:"95px"}}   direction="row" spacing={2} className='mt-3 '>
        <Button disabled={isprinciple&&isintrest&&isyr?false:true} className='bg-success'  variant="contained" type="submit" >Submit</Button>
        <Button variant="contained" onClick={reset}>Reset</Button>
        </Stack>

          
        </form>
      </div>

    </div>
    </div>
   
  
   </>
  );
}

export default App;
