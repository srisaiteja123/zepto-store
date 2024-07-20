import React, { useContext, useState } from "react";
import { AppContext } from "../../context/appContext.js";
import products from "./products.json"
import "./Product.css"
import AddButton from "./AddButton.js";
import ShowProduct from "./ShowProduct.js";

export default function Products() {
  const { cartItems, setCartItems, flag, setFlag } = useContext(AppContext);
  const PATH = process.env.REACT_APP_PATH
  // const addtoCart = (id) => {
  //   setCartItems((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  // };
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProducts, setShowProducts] = useState(false);

  const handleClick = (value) => {
    setShowProducts(!showProducts);
    setSelectedProduct(value);
  }

  return (
    <div className="Product-container">
      {products && !showProducts &&
        products.map((value) => (
          <div key={value.id} className="Product-items">
            <div onClick={() => handleClick(value)}><img className="Product-img" src={value.image} alt={value.name} /></div>
            <h3>{value.name}</h3>
            <p style={{ textAlign: "justify", padding: "10px" }}>{value.desc}</p>
            <div className="priceBtn">
              <div className="priceTxt">₹{value.price}</div>
              <div className="Product-button"><AddButton id={value.id} /></div>
              {/* <button className="Product-button" onClick={() => addtoCart(value.id)}>Add</button> */}
            </div>
          </div>
        ))}
      {selectedProduct && <ShowProduct product={selectedProduct} />}
    </div>
  );
}