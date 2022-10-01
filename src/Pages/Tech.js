import React from 'react';
import { GetTechCategory } from '../Query/AllQuery';
import '../Css/category.css';

export default class Tech extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <>
      <h1>TECH</h1>
      <div className="page-content">
        {GetTechCategory}
      </div>
      </>
  )}

}