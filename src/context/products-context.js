import React, { useState } from "react";

export const productsContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});

const ProductsProvider = (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (id) => {
    setProductsList((prevProdList) => {
      const prodIndex = prevProdList.findIndex((prod) => prod.id === id);
      const newFavStatus = !prevProdList[prodIndex].isFavorite;
      const updatedProducts = [...prevProdList];
      updatedProducts[prodIndex] = {
        ...prevProdList[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  return (
    <productsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavorite }}
    >
      {props.children}
    </productsContext.Provider>
  );
};

export default ProductsProvider;
