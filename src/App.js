import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
            <Route 
              exact path="/About"
              element={<About />}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/profile' that renders the `profile` component */}
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
