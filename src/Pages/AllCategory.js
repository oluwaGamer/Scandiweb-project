import React from 'react';
import { GetAllCategory } from '../Query/AllQuery';
import '../Css/category.css';

export default class AllCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <>
        <h1>ALL CATEGORY</h1>
        <div className="page-content">
         {GetAllCategory}
        </div>
      </>
  )}

}