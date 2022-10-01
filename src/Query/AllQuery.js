import { gql } from '@apollo/client';
import {Query} from '@apollo/client/react/components';


//GetAllCategory Start
const GetAllCategoryQuery = gql`
  query GetAllCategories {
  category(input: { title: "all" }) {
    name
    products {
      id,
      name,
      gallery,
      prices {
        currency{
          label,
          symbol
        },amount
      }
    }
  }
}
`;

const GetAllCategory = 
<Query query={ GetAllCategoryQuery }>
  {({ data, loading, error }) => {
    if (error) return console.log(error);
    if (loading) return <div>Loading…</div>;
    if(data) return data.category.products.map((Category) => 
      <div className='single-product'>
        <img src={Category.gallery} alt='Products' className='ProductImage'></img>
        <h3 data-product-id={Category.id}><a href={'/' + Category.id}>{Category.name}</a></h3>
        <h3>{Category.prices.map((price) => <>{price.currency.symbol}{price.amount} <br></br> </>)}</h3>
      </div>
      );
}}
</Query >
;

//GetAllCategory End




//GetClotherCategory Start

const GetClothesCategoryQuery = gql`
  query GetClothesCategories {
    category(input: { title: "clothes" }) {
    name
    products {
      id,
      name,
      gallery,
      prices {
        currency{
          label,
          symbol
        },amount
      }
    }
  }
}
`;

const GetClothesCategory = 
<Query query={ GetClothesCategoryQuery }>
  {({ data, loading, error }) => {
    if (error) return console.log(error);
    if (loading) return <div>Loading…</div>;

    if(data) return data.category.products.map((Category) => 
    <div className='single-product'>
      <img src={Category.gallery} alt='Products' className='ProductImage'></img>
      <h3 data-product-id={Category.id}><a href={'/' + Category.id}>{Category.name}</a></h3>
      <h3>{Category.prices.map((price) => <>{price.currency.symbol}{price.amount} <br></br> </>)}</h3>
    </div>
      );
}}
</Query >
;

//GetClothesCategory End





//GetTechCategories Start
const GetTechCategoryQuery = gql`
  query GetTechCategories {
    category(input: { title: "tech" }) {
    name
    products {
      id,
      name,
      gallery,
      prices {
        currency{
          label,
          symbol
        },amount
      }
    }
  }
}
`;

const GetTechCategory = 
<Query query={ GetTechCategoryQuery }>
  {({ data, loading, error }) => {
    if (error) return console.log(error);
    if (loading) return <div>Loading…</div>;

    if(data) return data.category.products.map((Category) => 
    <div className='single-product'>
      <img src={Category.gallery} alt='Products' className='ProductImage'></img>
      <h3 data-product-id={Category.id}><a href={'/' + Category.id}>{Category.name}</a></h3>
      <h3>{Category.prices.map((price) => <>{price.currency.symbol}{price.amount} <br></br> </>)}</h3>
    </div>
      );
}}
</Query >
;

//GetTechCategories End




//GetProductDescription Staet
const GetProductDescriptionQuery = gql`
  query GetCategories($productID: String!) {

    product(id: $productID) {
	    name,
        id,
      inStock,
      gallery,
      description,
      category,
      attributes {
        id,
        name,
        type,
        items {
          displayValue,
          value,
          id
        }
      },
      prices {
       currency {
        label,
        symbol
      },
        amount
      },
      brand
    }

  }
`;

//End Product Description




export { GetAllCategory, GetClothesCategory, GetTechCategory, GetProductDescriptionQuery };