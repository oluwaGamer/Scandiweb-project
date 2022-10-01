import React from 'react';
import AllCategory from './Pages/AllCategory';
import Tech from './Pages/Tech';
import Clothes from './Pages/Clothes'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Pages/Nav";
import ProductDescription from './Pages/ProductDescriptionPage';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    counter: state.counter.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
 
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<AllCategory />} />
          <Route path="clothes" element={<Clothes />} />
          <Route path="tech" element={<Tech />} />
          <Route path="/:productID" element={<ProductDescription />} />
        </Route>
      </Routes>
      <div>
        <button aria-label="Increment value" > Increment </button>

        <span>{this.props.counter}</span>

        <button aria-label="Decrement value" > Decrement </button>
      </div>
    </BrowserRouter>
    
  )}

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
