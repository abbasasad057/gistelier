import React from 'react';
import './App.css';
import GISBar from './components/gisbar/';
import Toc from './components/toc/';
import MapEditor from './components/mapeditor/';
import {CssBaseline} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <GISBar/>
      <Toc/>
      <MapEditor/>
    </div>
  );
}
export default App;
