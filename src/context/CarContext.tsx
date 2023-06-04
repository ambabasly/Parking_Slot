import React, { createContext, useContext, useState, useEffect } from "react";
import { Car } from "../partials/data";

interface GarageContextType {
  loading: boolean;
  garageCollection: Car[];
}

const GarageContext = createContext<GarageContextType>({} as GarageContextType);

interface GarageProviderProps {
  children: React.ReactNode;
}

export const useGarageContext = () => {
  return useContext(GarageContext);
};  

export const GarageProvider = ({ children }: GarageProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [garageCollection, setGarageCollection] = useState([]);

  useEffect(() => {
    const fetchItemsFromCollection = () => {
      setLoading(true);
      try {
        const storedGarageCollection = localStorage.getItem("garageCollection");

        if (storedGarageCollection) {
          const parsedGarageCollection = JSON.parse(storedGarageCollection);
          setGarageCollection(parsedGarageCollection);
          console.log("This is the Garage Collection: ", garageCollection);
        }
      } catch (error) {
        console.log("Failed to fetch from storage");
      } finally {
        setLoading(false);
      }
    };
    fetchItemsFromCollection();
  }, []);

  const value = {
    loading,
    garageCollection,
  };

  return (
    <GarageContext.Provider value={value}>{children}</GarageContext.Provider>
  );
};
