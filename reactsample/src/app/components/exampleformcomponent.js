
import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import SampleItemModel from '../models/sampleitemmodel';
import ExampleItemComponent from './exampleitemcomponent';

import { Chart } from "react-google-charts";

export default function ExampleFormComponent({data,onChangData}) {

    let [_currentItem, setItem] = React.useState(new SampleItemModel);


      function setCurrentItem(x) {
        setItem(x);
       // alert('You clicked me!');
      }


      const setData= (e, prop) => {
       
        const citm = {..._currentItem};

        switch(prop) {
            case "description":
                citm.description = e.target.value;
              break;
            case "cost":
                citm.cost = e.target.value;
              break;
            case "qty":
                citm.qty = e.target.value;
              break;
            default:
             
          }

        setItem(citm);
        onChangData(citm);

      }
    



const selectItem = () => {
    onChangData(data);

  }


   const pcdata = [
    ["Task", "Qty to Sold"],
    ["Qty", _currentItem.qty],
    ["Sold", _currentItem.sold],
  ];
  
 const pcoptions = {
    title: "Qty to Sold",
    legend: {position: 'top'},
    colors: ['#999999', '#bbbbbb']
  };



  return (
    <div class="shadeColorB" style={{flex:' 1 1 auto', position: 'relative', display: 'flex', height: '100%'}}>
    <div class="shadeColor" style={{flex:' 0 1 auto', position: 'relative', width: '320px'}}>
        <div class="titleSmall"> Items </div>
        <div class="baseAbsolute" style={{display:'flex', top:'30px', flexDirection:'column'}}>
  

{data?.map((child, i) => {
    return (
   
      <ExampleItemComponent item = {child}  onSelectCurrent={setCurrentItem}  pclass={ i%2 ===0 ? "shadeColorA": "shadeColorAB" } key={i}/>
    
    );
  })}


  
        </div>
  
    </div>
    <div style={{flex:' 1 1 auto' }}>
        <div style={{position:'relative', display: 'flex', flexDirection:'column' }}>
            <div class="titleSmall" style={{flex:' 0 1 auto' }}>Item Info</div>
  
            <div style={{flex: '0 1 auto', padding: '10px'}}></div>
            <div style={{flex: '1 1 auto', position: 'relative', display: 'flex', padding: '10px'}}>
                <div style={{flex: '1 1 auto', display: 'flex' }}>
                    <div style={{flex: '0 1 auto'}}>
                        <div class="inputTitle shadeColorA">Title</div>
                        <div class="inputTitle shadeColorAB">Description</div>
                        <div class="inputTitle shadeColorA">Cost</div>
                        <div class="inputTitle shadeColorAB">Qty</div>
                        <div class="inputTitle shadeColorA">Sold</div>
                    </div>
                    <div style={{flex: '0 1 auto', width: '400px'}}>
                        <div class="itemValue shadeColorA">{_currentItem.title}</div>
                        <div class="itemValue shadeColorAB"><input style={{width:'95%'}} type="text" value={_currentItem.description} onChange={ (e) => setData(e,"description") }  /></div>
                        <div class="itemValue shadeColorA"><input style={{width:'50px'}} value={_currentItem.cost} onChange={ (e) => setData(e,"cost") } /></div>
                        <div class="itemValue shadeColorAB"><input style={{width:'50px'}} type="number" value={_currentItem.qty} onChange={ (e) => setData(e,"qty") }  /></div>
                        <div class="itemValue shadeColorA">{_currentItem.sold}</div>
  
  
                    </div>
                    <div style={{flex: '1 1 auto', display:'flex'}}>
                        <div style={{ flex: '1 1 auto'}}></div>
                        <div style={{ flex: '0 1 auto', width: '400px', backgroundColor:'#edededed'}}>
                        <Chart 
      chartType="PieChart"
      data={pcdata}
      options={pcoptions}
      width={"400px"}
      height={"300px"}
    />
                        </div>
                        <div style={{flex: '1 1 auto'}}   ></div>
                    </div>
                    </div>
  
            </div>
  
  
        </div>
  
    </div>
  </div>
  
  );
}

