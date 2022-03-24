import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SideBar from './SideBar.js';


function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
          <SideBar />
        </div>
    </React.Fragment>
  );
}

export default App;
