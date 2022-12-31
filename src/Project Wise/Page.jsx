import React, { useState,useEffect } from 'react';
import Select from 'react-select';
import {getalldata} from './api'
import style from './style.css';
import { MultiSelect } from "react-multi-select-component";
import { AppBar,styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import { add1 } from './store/property1Slice';
import { add2 } from './store/property2Slice';
import { add3 } from './store/property3Slice';
import Header from './Header';
import DialogBox from './DialogBox';


 




 
 
const Page = () => {

  



  const [users,setUsers] = useState([]);
  const [users2,setUsers2] = useState([]);
  const [users3,setUsers3] = useState([]);
  const [data,setdata] = useState([]);
  const [data2,setdata2] = useState([]);
   const [data3,setdata3] = useState([]);
  const [print,setprint] = useState({});

 //console.log(users2)
 
 
 const dispatch=useDispatch()
 useEffect(() => {
       
  dispatch(add1(users))
}, [users]);


useEffect(() => {
      
 dispatch(add2(users2))
}, [users2]);

useEffect(() => {
      
  dispatch(add3(users3))
 }, [users3]);
 
  const getAllUsers=(selectedOptions)=>{
     let response= selectedOptions;
     setUsers(response)
     //console.log(response)
    }
 
    const getAllUsers2=(selectedOptions)=>{
      let response= selectedOptions;
      setUsers2(response)
      //console.log(response)
     }

     const getAllUsers3=(selectedOptions)=>{
      let response= selectedOptions;
      setUsers3(response)
      //console.log(response)
     }
  useEffect(() => {
   getdata()
   
 }, []);
 useEffect(() => {
  getdata2()
  
}, []);
useEffect(() => {
  getdata3()
  
}, []);
  const getdata = async () => {
      let response = await getalldata();
      setdata(response.data);
  }
 
  const getdata2 = async () => {
    let response = await getalldata();
    setdata2(response.data);
}
const getdata3 = async () => {
  let response = await getalldata();
  setdata3(response.data);
}

 
  return ( <> 
 
  <div style={{    display: 'flex',
 marginTop:'10px',
    width:'100%',
    height:'50px',
    borderRadius: '5px',
    border:'1px solid #cdbebe', justifyContent:'center',
    background: '#081834',
    position: 'fixed',  
    top:"10px" 
    }}>
 

<div style={{margin:'5px'}}>
        <button style={{border:'none',width:'250px',height:'25px',background:'none'}}>
        
        <DialogBox />
        </button> 
        </div>

<div style={{width:"20%",marginLeft:'35px',marginTop:'5px'}}><Select
     
     onChange={getAllUsers}
     options={data}
     style={{height:"10px",width:"10px"}} 
     labelledBy="Select Property"
     placeholder="Select Property"
   /></div>
       
       <div style={{width:"20%",marginLeft:'35px',marginTop:'5px'}}><Select
     
     onChange={getAllUsers2}
     options={data2}
     style={{height:"10px",width:"10px"}} 
     labelledBy="Select Property"
     placeholder="Select Property"
   /></div>

 <div style={{width:"20%",marginLeft:'35px',marginTop:'5px'}}><Select
     
     onChange={getAllUsers3}
     options={data3}
     style={{height:"10px",width:"10px"}} 
     labelledBy="Select Property"
     placeholder="Select Property"
   /></div>
  </div>

</>
   
  )
}
 
export default Page;