
import './App.css';
import { useState, useEffect } from 'react';
import Form from './components/Form';
import ProductList from './components/ProductList';
import axios from 'axios';
import ViewProduct from './components/ViewProduct';
import { Routes, Route } from 'react-router-dom';
import UpdateProduct from './components/UpdateProduct';

function App(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/products")        // Get all product
      .then((response) => {
        // Always see what the server is coming back with 
        //  console.log(response.data)
        setProducts(response.data)
      })
      .catch(err => console.log(err))
  }, [])

// const removeFromDom = productId => {
//     setProducts(products.filter(product => product._id != productId));
// }

  return (
    <div className="App">
      <h1>Product Manager</h1>
      {/* <Form /> */}
      
      <Form />
      <hr />
      <Routes>

        <Route element={<ProductList products={products} setProducts={setProducts}                   />} path="/" />
        <Route path="/products/:id" element={<ViewProduct   />} />
        <Route path="/products/:id/edit" element={< UpdateProduct/>} />

      </Routes>

    </div>
  );
}

export default App;
