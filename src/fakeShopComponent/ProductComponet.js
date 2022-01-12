import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponet = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide colum images" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link card">
            <div className="Card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="Header">{title}</div>
                <div className="price">{price}</div>
                <div className="metatitle">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponet;
