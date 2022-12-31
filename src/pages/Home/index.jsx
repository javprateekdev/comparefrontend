import React, { useEffect, useState } from "react";
import EmptyView from "../../components/common/EmptyView";
import FilterPanel from "../../components/Home/FilterPanel";
import List from "../../components/Home/List";
import SearchBar from "../../components/Home/SearchBar";
import { dataList } from "../../constants";
import { options } from "../../constants";
import Select from "react-select";
import "./styles.css";
import { getalldata } from "../../api";
import Footer from "../../Footer";
import Header from "../../Header";
const Home = () => {


  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);

  const [selectedOption, setSelectedOption] = useState({});
  const [selectedOption2, setSelectedOption2] = useState({});
  const [selectedOption3, setSelectedOption3] = useState({});

           
  const { value:value } = selectedOption;
  const { value:value2 } = selectedOption2;
  const { value:value3 } = selectedOption3;

    
  const[data,setdata]=useState([]);
  console.log(data)

  const getdata = async () => {
    let response = await getalldata();
    setdata(response.data);
}


 const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [list3, setList3] = useState([]);

  console.log(list)
  

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);


    const[open,setOpen]= useState(false)
    const[open2,setOpen2]= useState(false)
    const[open3,setOpen3]= useState(false)

    useEffect(() => {
      if(value!==undefined){
        setOpen(true);
      }
    }, [value]);
    
    useEffect(() => {
      if(value2!==undefined){
        setOpen2(true);
      }
    }, [value2]);
    useEffect(() => {
      if(value3!==undefined){
        setOpen3(true);
      }
    }, [value3]);


    

  const applyFilters = () => {
    let updatedList = data;
    let updatedList2 = data;
    let updatedList3 = data;
     
    
    console.log(dataList.length)
    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    if (selectedRating) {
      updatedList2 = updatedList2.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }
    if (selectedRating) {
      updatedList3 = updatedList3.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }
    if (selectedCategory) {
      updatedList2 = updatedList2.filter(
        (item) => item.category === selectedCategory
      );
    }
    if (selectedCategory) {
      updatedList3 = updatedList3.filter(
        (item) => item.category === selectedCategory
      );
    }

    if (value) {
      updatedList = updatedList.filter((item) => item.title === value);
    }
    
    if (value) {
      updatedList2 = updatedList2.filter((item) => item.title === value2);
    }
    
    if (value) {
      updatedList3 = updatedList3.filter((item) => item.title === value3);
    }


   
  
   

    // Price Filter
   

  

    setList(updatedList);
    setList2(updatedList2);
    setList3(updatedList3);

   

  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory,value,value2,value3]);

  useEffect(() => {
    getdata();
  }, [selectedRating, selectedCategory,value,value2,value3]);

  return (
    <>
    <Header/>
    {/*
    <div style={{ border: "1px solid black" }}>
     
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%", border: "1px solid black", height: "60px" }}>
          
        </div>

        
          
          <div style={{ width: "30%" }}>
            
          </div>
        
        
      </div>
     
      
    </div>

   */}

 
    <div style={{display:"flex",marginTop:"15px"}}>
      <div style={{height:"90px",width:"100%",marginBottom:"0px",padding:"0px"}}>
      <FilterPanel
              selectedCategory={selectedCategory}
              selectCategory={handleSelectCategory}
              selectedRating={selectedRating}
              selectRating={handleSelectRating} 
            />

      </div>
     
   
    </div>
    
    <div style={{display: 'flex',
    width:'100%',
    height:'50px',
    borderRadius: '5px',
    border:'1px solid #cdbebe', justifyContent:'center',
    background: '#081834',
    position: 'fixed',  
     
    }}>
    <div style={{ width: "33%",margin:"5px",zIndex:"1000",height:"500px" }}>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder="Select"
          />
        </div>
        <div style={{ width: "33%",margin:"5px" }}>
          <Select
            defaultValue={selectedOption2}
            onChange={setSelectedOption2}
            options={options}
            placeholder="Select"
            label="Select"
            
          />
        </div>
        <div style={{ width: "33%",margin:"5px" }}>
          <Select
            defaultValue={selectedOption2}
            onChange={setSelectedOption3}
            options={options}
            placeholder="Select"
          />
        </div>
    

</div>
<div style={{display:"flex",marginBottom:"10px"}}>
<div style={{width:"32%" ,margin:"1%"}}>

{ open ? <List list={list} />:<div style={{height:"1500px",zIndex:"0"}}></div> }
      
</div>
<div style={{width:"32%",margin:"1%"}}>

{  open2 ? <List list={list2} /> :<div style={{height:"1500px",zIndex:"0"}}></div>}
      
</div>
<div style={{width:"32%",margin:"1%"}}>

  {open3 ? <List list={list3} />:<div style={{height:"1500px",zIndex:"0"}}></div> }
      
</div>

</div>


  </>

  );
};

export default Home;
