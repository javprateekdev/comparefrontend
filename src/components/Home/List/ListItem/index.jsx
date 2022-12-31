import React from 'react';
import './styles.css';

const ListItem = ({
  item: { coverSrc, title, price, serviceTime, rating,SuperArea,CarpetArea,NoofBalconies,Loading,Electricload,Powerbackup,FurnishedorSemifernished,CeilingHeight, MainDoorHeight,InternalDoorHeights },
}) => (
  <div style={{marginTop:"20px"}}>
  <img className="img" src={coverSrc} alt='' />
  <table className="container2">
  <tbody>
  <tr>
      <td>{title}</td>
      <td>{rating} BHK</td>  
  </tr>
  <tr>
      <td> Base Price</td>
      <td>{price} Cr</td>
  </tr>
  <tr>
      <td>Possession Date</td>
      <td>{serviceTime}</td>
  </tr>
  <tr>
      <td>Super Area </td>
      <td>{SuperArea}</td>
  </tr>
  <tr>
      <td>Carpet Area </td>
      <td>{CarpetArea}</td>
  </tr>
  <tr>
      <td>No of Balconies</td>
      <td>{NoofBalconies}</td>
  </tr>
  <tr>
      <td>Loading </td>
      <td>{Loading}</td>
  </tr>
  <tr>
      <td>Electric load</td>
      <td>{Electricload}</td>
  </tr>
  <tr>
      <td>Powerback up</td>
      <td>{Powerbackup}</td>
  </tr>
  <tr>
      <td>Furnished or Semifernished</td>
      <td>{FurnishedorSemifernished}</td>
  </tr>
  <tr>
      <td>Main Door Height</td>
      <td>{MainDoorHeight}</td>
  </tr>
  <tr>
      <td>Ceiling Height</td>
      <td>{CeilingHeight}</td>
  </tr>
  <tr>
      <td>Internal Door Heights</td>
      <td>{InternalDoorHeights}</td>
  </tr>

  </tbody>
</table>
  </div>

);

export default ListItem;
