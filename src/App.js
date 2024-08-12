

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './router/AppRouter';
import {Routes,Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
     <Routes>
      <Route path={"/*"} element={<AppRouter />}></Route>
     </Routes>
    )
  }
}

export default App;
