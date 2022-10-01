import React from 'react';
import { GetProductDescriptionQuery } from '../Query/AllQuery';
import {Query} from '@apollo/client/react/components';
import '../Css/productdescriptionpage.css'

const path = window.location.pathname;
const ID =  path.substring(1);
console.log(ID);

class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    
    return(
        <Query query={ GetProductDescriptionQuery } variables={{ productID: ID}}>
            {({ data, loading, error }) => {
                if (error) return console.log(error);
                if (loading) return <div>Loading…</div>;

                if(data) return <div className='description-page-content'>
                  
                  <div className='image-list-div'>
                    {data.product.gallery.map((image) => <><img src={image} alt='product-list-img' className='image-list-image'></img></>)}
                  </div>

                  <div className='main-img-div'>
                    <img src={data.product.gallery} alt='Products' className='main-img'></img>
                  </div>

                  <div className='product-attr-div'>
                    <h2>{data.product.name}</h2>
                    
                    { data.product.attributes.map((attr) => <> <h3>{attr.name}</h3>
                    {attr.items.map((attrItems) => <> {attrItems.displayValue} </>)}
                    </>) }

                    <h3>Price:</h3>
                    {data.product.prices.map((price) => <>{price.currency.symbol}{price.amount} <br></br> </>)}

                    <button>ADD TO CART</button>
                    {data.product.description}
                  </div>

                </div>
                
            }}
        </Query >
  )}

}

export default ProductDescription;


// <Query query={ GET_CATEGORIES }>
//       {({ data, loading, error }) => {
//         if (error) return console.log(error);
//         if (loading) return <div>Loading…</div>;

//         if(data) return data.category.products.map((ProductCategory) => 
            
//               <h3 data-product-id={ProductCategory.id}>{ProductCategory.name}</h3>
            
//           );
//       }}
//     </Query >