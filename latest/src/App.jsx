import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import Assignment from "./component/Assignment";
import Html from "./component/Html";


function App() {
  return (
    <div>
      <h1>My App</h1>
      <Assignment />
      <Html />
    </div>
  );
}

export default App;