import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import Routes from './routes';


function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
