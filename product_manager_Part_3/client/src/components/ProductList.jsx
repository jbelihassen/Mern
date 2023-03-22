import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ProductList = (props) => {



// const { removeFromDom } = props;
// const removeFromDom = productId => {
// props.setProducts(props.products.filter(product => product._id != productId));
// }

const deleteProduct = (productId) => {
    axios.delete('http://localhost:8000/api/products/' + productId)
        .then(response => {
          props.setProducts(props.products.filter(product => product._id != productId));
        })
        .catch(err => console.error(err));
}
  
  return (
    <div>

      <h1>All Products</h1>
      {props.products.map((product) => {
        return <div       key={product._id} >
          <Link to={`/products/${product._id}`} > {product.title} </Link>
          <button type="button" class="btn btn-light"         ><Link to={"/products/" + product._id + "/edit"}> Edit</Link></button>

          <button  type="button" class="btn btn-danger"  onClick={(e)=>{deleteProduct(product._id)}}          ><Link to={"/"}> Delete </Link></button>
        </div>
      })}


    </div>
  )
}

export default ProductList