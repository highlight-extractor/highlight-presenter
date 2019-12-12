import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Upload from "./upload/Upload";
import Highlights from "./highlights/Highlights";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function Index() {
  return <h2>Home</h2>;
}

const AppRouter: React.FC = () => {
  return (
      <Router>
        <Route path="/" exact component={Index} />
        <Route path="/upload" exact component={Upload} />
        <Route path="/highlights" exact component={Highlights} />
      </Router>
  );
};

export default AppRouter;
