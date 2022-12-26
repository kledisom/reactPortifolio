import { useState } from 'react';
import './App.css';
import BarLateral from './Components/Bar_lateral';
import Card01 from './Components/Card01';
import Card02 from './Components/Card02';
import Card03 from './Components/Card03';
import Card04 from './Components/Card04';


function App() {
  const [show, setShow] = useState(true);

  function teste() {  
    const icoMenu = document.querySelector('#ico-menu').style.display;

    if(icoMenu == '' || icoMenu == 'block') {
      document.querySelector('#ico-menu').style.display = 'none'
      document.querySelector('.content').style.display = 'flex';
      document.querySelector('aside').style.cssText = `
      display: flex;
      transition: 10s;
      `;

      for(let i = 1; i < 5; i++) {
        document.querySelector(`.card0${[i]}`).style.cssText = `
        width: 79.5%;
        margin-left: 20.5%;
        /* transition: 1s; */
        `;
      };

    } else {
      document.querySelector('#ico-menu').style.display = 'block';
      document.querySelector('.content').style.display = 'none';
      document.querySelector('aside').style.display = 'none';

      for(let i = 1; i < 5; i++) {
        document.querySelector(`.card0${[i]}`).style.cssText = `
        width: 100%;
        margin-left: 0%; 
        transition: 0.5s;
        `;
      };
    };
  };

  return (
    <div className="App">     
     <BarLateral onClick={teste} />
      <Card01 name="CARD 01" onClick={teste}/>
      <Card02 name="CARD 02" />
      <Card03 /> 
      <Card04 />   
    </div>
  );
}

export default App;
