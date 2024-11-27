import React, { createContext } from 'react';
import all_products from '../Component/Asserts/all_product'; // Ensure this file exists and exports an array of products.

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product: all_products }; // Corrected `all_product` key.

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
