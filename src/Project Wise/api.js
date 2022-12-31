import axios from 'axios';

const URL = 'http://localhost:8000/compare/data';

export const getalldata=async ()=>{
    try{
       return await axios.get(`${URL}`);
    }catch(error){
        console.log('Eror while calling getUsers API',error)
    }
    
}


