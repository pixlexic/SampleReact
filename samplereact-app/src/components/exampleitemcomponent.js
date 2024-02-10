
import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


export default function ExampleItemComponent({item, onSelectCurrent, pclass}) {

    const [_currentItem, setItem] = React.useState(item);


const selectItem = () => {
    onSelectCurrent(item);
  }


  return (

<div class={pclass} style={{flex: '0 1 auto', padding: '0 0px'  }}>
  <button class="baseButton mainColor shadeColorH" style={{display:'block', width: '100%', padding:'6px', textAlign: 'left'}}  onClick={selectItem} >{item.title}</button>
</div>


  );
}

