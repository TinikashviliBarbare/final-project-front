import React, { createContext, useContext, useState, useEffect } from "react";

export const LoaderContext = createContext();

export function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
}

export const useLoader = () => useContext(LoaderContext);