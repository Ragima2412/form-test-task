import React from 'react';
// import '../Select/Select.css';

const Select = () => {
  return (
    <div class="floating-label">  
    <select class="floating-select" onclick="this.setAttribute('value', this.value);" value="">
      <option value=""></option>
      <option value="1">Item1</option>
      <option value="2">Item2</option>
      <option value="3">Item3</option>
      <option value="4">Item4</option>
      <option value="5">Item5</option>
    </select>
    <label>Select</label>
</div>
  )
}

export default Select;