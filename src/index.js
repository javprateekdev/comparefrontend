import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Footer from './Footer';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    
   
         <div id="root"> 
         <App />
         <Footer/>

         </div>  
        
         
    
  </React.StrictMode>,
  document.getElementById('root')
);
