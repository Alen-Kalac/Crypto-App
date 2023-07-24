import React, { createContext, useEffect, useState } from "react";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  // Retrieve favouriteCoins from local storage if it exists, otherwise, set it to an empty object
  const [favouriteCoins, setFavouriteCoins] = useState(
    JSON.parse(localStorage.getItem("favouriteCoins")) || []
  );

  // Update local storage when favouriteCoins state changes
  useEffect(() => {
    localStorage.setItem("favouriteCoins", JSON.stringify(favouriteCoins));
  }, [favouriteCoins]);

  const values = {
    favouriteCoins,
    setFavouriteCoins,
  };

  return (
    <appContext.Provider value={values}>{children}</appContext.Provider>
  );
};

export { appContext, AppContextProvider };
