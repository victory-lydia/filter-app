import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/sidebar";
import "./Navigation/Nav.css";
import "./index.css";

// Database
import data from "./db/data.json";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState(data.products);

  // Input Filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    const filteredItems = data.products.filter((product) => {
      return product.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });

    setProducts(filteredItems);
  };

  // Radio Filter
  const handleChange = (event, property) => {
    const value = event.target.value;

    const filteredProducts = data.products?.filter(
      ({ category, brand }) => category === value || brand === value
    );

    setProducts(filteredProducts);
  };

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleChange} />
      <Products data={products} />
    </>
  );
}

export default App;
