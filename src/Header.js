import React from 'react';
import {AppBar,styled,Button} from '@mui/material';
import GenericPdfDownloader from "./Project Wise/GenericPdfDownloader";


const StyledHeader = styled(AppBar)`
    background: #e5e4e4;
    height: 55px;
    float:top;
    
`;
const CustomButton = styled(Button)`
    color:'#808080',
    background:'#808080',
    font-size:50px;
    `




const MHeader = () => {
  return (
    <StyledHeader position="fixed"  >
      <div className='mheader'>
        <span><img src='https://i.imgur.com/KrEqEpO.png' style={{height:'55px',width:'180px',objectFit:'cover'}} /> </span>
        <span style={{width:'100px',float:'right',marginRight:'50px'}}><GenericPdfDownloader 
          downloadFileName="CustomPdf" 
          rootElementId="root" 
          
        /></span>
        {/*<span><img src='https://i.imgur.com/ZC8Xq8c.png' style={{width:'100px',float:'right',marginRight:'25px'}} /> </span>*/}
   
 





      </div>
   
    </StyledHeader>
  )
}

export default MHeader;