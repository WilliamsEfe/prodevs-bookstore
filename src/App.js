import React from "react";
import logo from "./prodevs.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEdit,
  faTrash,
  faUser,
  faList,
  faSignOutAlt,
  faPlus,
  faTachometerAlt,
  faBook,
  faCode,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

import { ToastContainer } from "react-toastify";
import BooksListContainer from "./components/book-list-container";
import BookForm from "./components/book-form";
import NotFound from "./components/not-found";

library.add(faEye);
library.add(faEdit);
library.add(faTrash);
library.add(faUser);
library.add(faTachometerAlt);
library.add(faList);
library.add(faSignOutAlt);
library.add(faPlus);
library.add(faBook);
library.add(faCode);
library.add(faQuestionCircle);

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <div className="cont">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <img
            className="app-logo"
            src={logo}
            width="60"
            height="60"
            alt="ReactJS"
          />
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  <FontAwesomeIcon icon="book" /> All Books
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/book" className="nav-link">
                  <FontAwesomeIcon icon="plus" /> Add a Book
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content">
          <Switch>
            <Route exact path="/" component={BooksListContainer} />
            <Route path="/book" component={BookForm} />
            <Route path="/book/:id" component={BookForm} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
