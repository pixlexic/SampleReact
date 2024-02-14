"use client";


import Image from "next/image";
import styles from "./page.module.css";

import ApiService from './services/apiservice';
import GlobalService from './services/globalservice';

import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ExampleItemComponent from './components/exampleitemcomponent';
import ExampleFormComponent from './components/exampleformcomponent';

export default function Home() {

  const [itms, setPosts] = useState([]);

   
  React.useEffect((App) => {
    (async () => {
   const it = await ApiService.GetItems();
   const response = await it;
   if (response) {
   setPosts(response.sampleItems);
   }
    })();



 },[]);




 if (itms.length === 0 || itms === undefined) {
  return [];
}
  

function updateItem(x)
{
  for(let i = 0; i < itms.length;i++)
  {
    if(x.id == itms[i].id)
    {
      itms[i] = x;
      break;
    }

  }

}


const setItems= (x) => {
  updateItem(x);
}





  return (




<div class="contentIn" style={{position:'relative', display:'flex', flexDirection:'column', height:'100%'}} >
  <div class="pageTitle"><div style={{ flex:' 0 1 auto', padding:'10px'}}>React Page</div></div>
  <div class="pageExplain"><div style={{ flex:' 0 1 auto', padding:'10px'}}>This is a simple page layout using only React. </div></div>
<ExampleFormComponent data={itms} onChangData={setItems} />
</div>




  
  );
}


