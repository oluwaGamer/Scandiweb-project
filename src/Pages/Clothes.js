import React from 'react';
import { GetClothesCategory } from '../Query/AllQuery';
import '../Css/category.css';

export default class Clothes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <>
        <h1>CLOTHES</h1>
        <div className="page-content">
          {GetClothesCategory}
        </div>
      </>
  )}

}