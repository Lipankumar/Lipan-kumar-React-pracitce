import React, { components } from "react";
import logo from './logo.svg';
import './App.css';
import  Greet from "./components/Greet";
import  Classexample  from "./components/classexample";
import  Destrucucture  from "./components/destrucucture";
import  State  from "./components/state";
import  Bind  from "./components/Bind";
import  ParentsComponent  from "./components/ParentsComponent";
import  ConditiionalRendering from "./components/ConditiionalRendering";
import  ListRender from "./components/ListRender";
import  NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Controlledcomponents from "./components/Controlledcomponents";
import Fragments from "./components/Fragments";
import Parentcomponent from "./components/Parentcomponent";
import Refsdemo from "./components/Refsdemo";
import Frparentinput from "./components/Frparentinput";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Greet/> */}
      {/* <Classexample /> */}
      {/* < Destrucucture name="lipan" id="hero"/> */}
      {/* <State /> */}
      {/* <Bind /> */}
      {/* <ParentsComponent /> */}
      {/* <ConditiionalRendering /> */}
      {/* <ListRender /> */}
      {/* <NameList /> */}
      {/* <Stylesheet name={true}/> */}
      {/* <Controlledcomponents /> */}
      {/* <Fragments /> */}
      {/* <Parentcomponent /> */}
      {/* <Refsdemo />  */}
      <Frparentinput /> 
    </div>
  );
}

export default App;
