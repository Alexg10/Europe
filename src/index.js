//REACT
import React from 'react';
import {render} from 'react-dom';
//CSS
import "./style/css/bootstrap.min.css";
import './index.css';
//Rooter
import { BrowserRouter, Match, Miss } from 'react-router';
//Components
import Home from './components/Home';
import NotFound from "./components/NotFound";
import Country from "./components/Country";


const Root = () =>{
    return <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/country/:name" render={props =><Country {...props} />} />
          <Miss component={NotFound} />
        </div>
      </BrowserRouter>;
}

render(
    <Root/>,
    document.getElementById('root')
);