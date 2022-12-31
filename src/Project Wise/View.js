import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from "@nextui-org/react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PlaceIcon from '@mui/icons-material/Place';
import ApartmentIcon from '@mui/icons-material/Apartment';
const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

const View = () => {
    const arr2d=useSelector((state) => state.cart)
    const arr1d = [].concat(...arr2d)
 // console.log(arr1d)
  const select= useSelector((state) => state.property1);
  const select2= useSelector((state) => state.property2);
  const select3= useSelector((state) => state.property3);
  //console.log(select3)
 
  const filteredUsers = Object.keys(select)
  .filter(key => arr1d.includes(key))
  .reduce((obj, key) => {
      obj[key] = select[key];
      return obj;
}, {});
 

const filteredUsers2 = Object.keys(select2)
.filter(key => arr1d.includes(key))
.reduce((obj, key) => {
    obj[key] = select2[key];
    return obj;
}, {});

const filteredUsers3 = Object.keys(select3)
.filter(key => arr1d.includes(key))
.reduce((obj, key) => {
    obj[key] = select3[key];
    return obj;
}, {});


const parameters={
  
name:"name",
label:" label",
ProjectPlotArea:"Project Plot Area",
GreenArea:"Green Area",
PropertyStatus:"Property Status",
PriceRange:"Price Range",
TotalTowers:"Total Towers",
TotalFlats:"Total Flats",
OCStatus:"OC Status",
Density:"Density",
PodiumNonPodium:"Podium/Non-Podium",
ApprovedBank:"Approved Banks",
ClubHouseSize:"Club House Size",
ConstructionType:"Construction Type",
TowerHeights:"Tower Heights",
LiftperTower:"Lift Per Tower",
FloorvsFlats:"Floor vs Flats",
PossessionDate:"Possession Date",
Lobby:"Lobby",
Distance:"Distance",

}
const filteredUsers4 = Object.keys(parameters)
.filter(key => arr1d.includes(key))
.reduce((obj, value) => {
    obj[value] = parameters[value];
    return obj;
}, {});

if(filteredUsers.Distance!==undefined){
  var str=filteredUsers.Distance
  var array1 = str.split("$"); 
  console.log(array1);
 }
 if(filteredUsers2.Distance!==undefined){
  var str=filteredUsers2.Distance
  var array2 = str.split("$"); 
  console.log(array2);
 }
 if(filteredUsers3.Distance!==undefined){
  var str=filteredUsers3.Distance
  var array3 = str.split("$"); 
  console.log(array3);
 }
 if(filteredUsers.ApprovedBank!==undefined){
  var str=filteredUsers.ApprovedBank
  var ap1 = str.split("$$"); 
  console.log(ap1);
 }
 if(filteredUsers2.ApprovedBank!==undefined){
  var str=filteredUsers2.ApprovedBank
  var ap2 = str.split("$$"); 
  console.log(ap2);
 }
 if(filteredUsers3.ApprovedBank!==undefined){
  var str=filteredUsers3.ApprovedBank
  var ap3 = str.split("$$"); 
  console.log(ap3);
 }
 if(filteredUsers.TowerHeights!==undefined){
  var str=filteredUsers.TowerHeights
  var th1 = str.split("$$"); 
  console.log(ap1);
 }
 if(filteredUsers2.TowerHeights!==undefined){
  var str=filteredUsers2.TowerHeights
  var th2 = str.split("$$"); 
  console.log(ap2);
 }
 if(filteredUsers3.TowerHeights!==undefined){
  var str=filteredUsers3.TowerHeights
  var th3 = str.split("$$"); 
  console.log(ap3);
 }
 //console.log(filteredUsers3.Distance)

  return (
    <>
{/*
        <Table
      striped
      sticked
         
      css={{
        
        height: 'auto',
        width:'100%',
        minWidth: "100%",
        marginTop:'50px',
        zIndex:"0"    
    
      }}
    >
      <Table.Header >
        <Table.Column style={{textTransform:'uppercase',fontSize:'14px'}}>COMPARISION PARAMETERS</Table.Column>
        <Table.Column style={{textTransform:'uppercase',fontSize:'14px'}}>{select.name}</Table.Column>
        <Table.Column style={{textTransform:'uppercase',fontSize:'14px'}}>{select2.name}</Table.Column>
        <Table.Column style={{textTransform:'uppercase',fontSize:'14px'}}>{select3.name}</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1" >
          <Table.Cell>
         
        {
         
        Object.entries(filteredUsers4).map(([key, value],i) => (
    <div key={key} style={{fontWeight:'700',height:'30px',textTransform:'uppercase',fontSize:'12px',width:"15%"}}>{value}</div>
))
 
}

    </Table.Cell>
          <Table.Cell>
          
{Object.entries(filteredUsers).map(([key, value]) => (
    <div key={key}  style={{height:'30px',fontSize:'14px'}}>{value}</div>
))
 
}
          </Table.Cell>
          <Table.Cell>
          <div>
{Object.entries(filteredUsers2).map(([key, value]) => (
    <div key={key}  style={{height:'30px',fontSize:'14px'}}>{value}</div>
))
 
}


</div>
          </Table.Cell>
          <Table.Cell>
          <div>
{Object.entries(filteredUsers3).map(([key, value]) => (
    <div key={key}  style={{height:'30px',fontSize:'14px'}}>{value}</div>
))
 
}


</div>
          </Table.Cell>
        </Table.Row>
      
      </Table.Body>
    </Table>
    
   */}
   
    <table class="container" style={{marginTop:"100px"}}>
 
  <tbody>

  {filteredUsers4.PriceRange ? <tr>
      <td>{filteredUsers4.PriceRange}</td>
      <td>{filteredUsers.PriceRange}</td>
      <td>{filteredUsers2.PriceRange}</td>
      <td>{filteredUsers3.PriceRange}</td>
    </tr>
    :<></>} 
    {filteredUsers4.ProjectPlotArea?
    <tr>
      <td>Project Plot Size</td>
      <td>{filteredUsers.ProjectPlotArea}</td>
      <td>{filteredUsers2.ProjectPlotArea}</td>
      <td>{filteredUsers3.ProjectPlotArea}</td>
    </tr>
    :<></>}
    {filteredUsers4.FloorvsFlats?
    <tr>
      <td>{filteredUsers4.FloorvsFlats}</td>
      <td>{filteredUsers.FloorvsFlats}</td>
      <td>{filteredUsers2.FloorvsFlats}</td>
      <td>{filteredUsers3.FloorvsFlats}</td>
    </tr>
    :<></>}
    {filteredUsers4.GreenArea?
    <tr>
      <td>Project Green Area</td>
      <td>{filteredUsers.GreenArea}</td>
      <td>{filteredUsers2.GreenArea}</td>
      <td>{filteredUsers3.GreenArea}</td>
    </tr>
    :<></>}
    {filteredUsers4.LiftperTower?
    <tr>
      <td>{filteredUsers4.LiftperTower}</td>
      <td>{filteredUsers.LiftperTower}</td>
      <td>{filteredUsers2.LiftperTower}</td>
      <td>{filteredUsers3.LiftperTower}</td>
    </tr>
    :<></>}

{filteredUsers4.PodiumNonPodium?
    <tr>
      <td>Podium Status</td>
      <td>{filteredUsers.PodiumNonPodium}</td>
      <td>{filteredUsers2.PodiumNonPodium}</td>
      <td>{filteredUsers3.PodiumNonPodium}</td>
    </tr>
    :<></>}
     {filteredUsers4.PossessionDate?
    <tr>
      <td>{filteredUsers4.PossessionDate}</td>
      <td>{filteredUsers.PossessionDate}</td>
      <td>{filteredUsers2.PossessionDate}</td>
      <td>{filteredUsers3.PossessionDate}</td>
    </tr>
    :<></>}
      {filteredUsers4.Density?
    <tr>
      <td>Density-Towerwise</td>
      <td>{filteredUsers.Density}</td>
      <td>{filteredUsers2.Density}</td>
      <td>{filteredUsers3.Density}</td>
    </tr>
    
    :<></>}
     {filteredUsers4.Density?
    <tr>
      <td>Density-Flatwise</td>
      <td>{filteredUsers.Density}</td>
      <td>{filteredUsers2.Density}</td>
      <td>{filteredUsers3.Density}</td>
    </tr>
    
    :<></>}
    
    {filteredUsers4.PropertyStatus?
    <tr>
      <td>{filteredUsers4.PropertyStatus}</td>
      <td>{filteredUsers.PropertyStatus}</td>
      <td>{filteredUsers2.PropertyStatus}</td>
      <td>{filteredUsers3.PropertyStatus}</td>
    </tr>
    :<></>}
     {filteredUsers4.TotalFlats?
    <tr>
      <td>{filteredUsers4.TotalFlats}</td>
      <td>{filteredUsers.TotalFlats}</td>
      <td>{filteredUsers2.TotalFlats}</td>
      <td>{filteredUsers3.TotalFlats}</td>
    </tr>
    :<></>}
     {filteredUsers4.TotalTowers?
    <tr>
      <td>{filteredUsers4.TotalTowers}</td>
      <td>{filteredUsers.TotalTowers}</td>
      <td>{filteredUsers2.TotalTowers}</td>
      <td>{filteredUsers3.TotalTowers}</td>
    </tr>
    :<></>}
   

    {filteredUsers4.TowerHeights?
    <tr>
      <td>Tower Heights</td>
       <td>
       {array1!==undefined?
     <div>  
 <div style={{display:"flex"}}><div><ApartmentIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{th1[0]}</div></div>
 <div style={{display:"flex"}}><div><ApartmentIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{th1[1]}</div></div>
 <div style={{display:"flex"}}><div><ApartmentIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{th1[2]}</div></div>
 
 </div>
     :<></>}
  </td>
  <td>
       {array2!==undefined?
     <div>
      <div style={{display:"flex"}}><div><ApartmentIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{th2[0]}</div></div>
 <div style={{display:"flex"}}><div><ApartmentIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{th2[1]}</div></div>
 <div style={{display:"flex"}}><div><ApartmentIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{th2[2]}</div></div>
 
     </div>
     :<></>}
  </td>
  <td>
       {array3!==undefined?
    <div>
    <div style={{display:"flex"}}><div><ApartmentIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{th3[0]}</div></div>
<div style={{display:"flex"}}><div><ApartmentIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{th3[1]}</div></div>
<div style={{display:"flex"}}><div><ApartmentIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{th3[2]}</div></div>

   </div>
     :<></>}
  </td>
    </tr>:<></>}
     {filteredUsers4.OCStatus?
    <tr>
      <td>{filteredUsers4.OCStatus}</td>
      <td>{filteredUsers.OCStatus}</td>
      <td>{filteredUsers2.OCStatus}</td>
      <td>{filteredUsers3.OCStatus}</td>
      </tr>
    :<></>}
   {filteredUsers4.Lobby?
    <tr>
      <td>Tower Lobby</td>
      <td>{filteredUsers.Lobby}</td>
      <td>{filteredUsers2.Lobby}</td>
      <td>{filteredUsers3.Lobby}</td>
    </tr>
    :<></>}
    {filteredUsers4.FloorvsFlats?
    <tr>
      <td>{filteredUsers4.FloorvsFlats}</td>
      <td>{filteredUsers.FloorvsFlats}</td>
      <td>{filteredUsers2.FloorvsFlats}</td>
      <td>{filteredUsers3.FloorvsFlats}</td>
    </tr>
    :<></>}
    {filteredUsers4.Distance  ?
    <tr>
      <td>Distance</td>
       <td>
       {array1!==undefined?
     <div>  
 <div style={{display:"flex"}}><div><PlaceIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{array1[0]}</div></div>
 <div style={{display:"flex"}}><div><PlaceIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{array1[1]}</div></div>
 <div style={{display:"flex"}}><div><PlaceIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{array1[2]}</div></div>
 <div style={{display:"flex"}}><div><PlaceIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{array1[3]}</div></div>
 </div>
     :<></>}
  </td>
  <td>
       {array2!==undefined?
     <div>
      <div style={{display:"flex"}}><div><PlaceIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{array2[0]}</div></div>
 <div style={{display:"flex"}}><div><PlaceIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{array2[1]}</div></div>
 <div style={{display:"flex"}}><div><PlaceIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{array2[2]}</div></div>
 <div style={{display:"flex"}}><div><PlaceIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{array2[3]}</div></div>
     </div>
     :<></>}
  </td>
  <td>
       {array3!==undefined?
    <div>
    <div style={{display:"flex"}}><div><PlaceIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{array3[0]}</div></div>
<div style={{display:"flex"}}><div><PlaceIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{array3[1]}</div></div>
<div style={{display:"flex"}}><div><PlaceIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{array3[2]}</div></div>
<div style={{display:"flex"}}><div><PlaceIcon style={{fontSize:"22px",marginRight:"25px"}}/></div><div>{array3[3]}</div></div>
   </div>
     :<></>}
  </td>
  </tr> 
 

       
     
       
      
      :<></>
    }
      {filteredUsers4.ApprovedBank ?
    <tr>
      <td>Approved Bank </td>
       <td>
       {ap1!==undefined?
     <td><div style={{display:"flex"}}>
     <div><img src={ap1[0]} alt="" style={{height:"50px",width:"50px"}}/></div>
     <div><img src={ap1[1]} alt="" style={{height:"50px",width:"50px"}}/></div>
     <div><img src={ap1[2]} alt="" style={{height:"50px",width:"80px"}}/></div>
     <div><img src={ap1[3]} alt="" style={{height:"50px",width:"50px"}}/></div>
     </div>
     </td>
     :<></>}
  </td>
  <td>
  {ap2!==undefined?
     <td><div style={{display:"flex"}}>
     <div><img src={ap2[0]} alt="" style={{height:"50px",width:"50px"}}/></div>
     <div><img src={ap2[1]} alt="" style={{height:"50px",width:"50px"}}/></div>
     <div><img src={ap2[2]} alt="" style={{height:"50px",width:"80px"}}/></div>
     <div><img src={ap2[3]} alt="" style={{height:"50px",width:"50px"}}/></div>
     </div>
     </td>
     :<></>}
  </td>
  <td>
  {ap3!==undefined?
     <td><div style={{display:"flex"}}>
     <div><img src={ap3[0]} alt="" style={{height:"50px",width:"50px"}}/></div>
     <div><img src={ap3[1]} alt="" style={{height:"50px",width:"50px"}}/></div>
     <div><img src={ap3[2]} alt="" style={{height:"50px",width:"80px"}}/></div>
     <div><img src={ap3[3]} alt="" style={{height:"50px",width:"50px"}}/></div>
     </div>
     </td>
     :<></>}
  </td>
  </tr> 
      
      :<></>
    }
   
     
    

  </tbody>
</table>

 


  </> 

  )
}

export default View;