import React from 'react';
import { categoryList, ratingList } from '../../../constants';
import FilterListToggle from '../../common/FilterListToggle';
import IOSSwitch from './Button';
import './styles.css';

const FilterPanel = ({
  selectedCategory,
  selectCategory,
  selectedRating,
  selectRating,
  
}) => (
  <div style={{display:"flex"}}>
    <div style={{height:"80px",width:"400px"}}>

     
       <FilterListToggle
        options={categoryList}
        value={selectedCategory}
        selectToggle={selectCategory}
      />
    </div>
 
 
    <div style={{height:"80px",marginLeft:"300px",float:"right"}} >
      
      <FilterListToggle
        options={ratingList}
        value={selectedRating}
        selectToggle={selectRating}
      />
    </div>
  </div>
);

export default FilterPanel;
