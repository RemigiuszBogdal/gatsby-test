import React from "react";
import { navigate } from "gatsby";

const Product = ({ pageContext }) => {
  return (
    <div>
      <p>sample product page</p>
      <button onClick={() => navigate("/")}>Go Back</button>
      <p>{pageContext.name}</p>
    </div>
  );
};

export default Product;
