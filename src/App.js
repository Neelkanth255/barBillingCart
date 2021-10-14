import React, { Component } from 'react';
import Wine from './Components/Wine.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css"
// @import '~antd/dist/antd.css';

import CheckOut from './Components/checkOut.js';

class App extends Component 
{
  state = {};

  render() 
  { 
    return(<div>

          <CheckOut></CheckOut>
          
          
          </div>);
  }
}
 
export default App;
