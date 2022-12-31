import axios from 'axios';

const URL = 'http://localhost:8000/';

export const getalldata=async ()=>{
    try{
       return await axios.get(`http://localhost:8000/flatdata`);
    }catch(error){
        console.log('Eror while calling getUsers API',error)
    }
    
}
