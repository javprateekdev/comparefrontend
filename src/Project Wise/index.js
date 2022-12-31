import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GenericPdfDownloader from "./GenericPdfDownloader";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <GenericPdfDownloader 
          downloadFileName="CustomPdf" 
          rootElementId="root" 
        />
         <div id="root"> 
         

         </div>   
    
  </>
);


