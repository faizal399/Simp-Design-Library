import { useState, createContext, useEffect,  } from "react";
import { supabase } from "../lib/supabase";
export const ComponentsContext = createContext();

const ComponentsProvider = ({ children }) => {

  const [components, setComponents] = useState([]);
  const [dark, setDark] = useState(true);
  const [loading, setLoading] = useState(null);
  
  const fetchComponents = async () => {
    const { data, error } = await supabase.from("components").select("*");

    if (error) {
      console.log("Supabase Error: ", error);
    } else {
      setComponents(data);
    }
  };

  useEffect(() => {
    fetchComponents();
  }, []);

  const FilterButtonComponent = () => {
    const filterbutton = components.filter(
      (button) => button.category?.toLowerCase() === "button",
    );
    return filterbutton;
  };
  const FilterCardComponent = () => {
    const filterbutton = components.filter(
      (button) => button.category?.toLowerCase() === "card",
    );
    return filterbutton;
  };

  const handleTheme = () => {
    setDark(!dark);
  };

  const LoadingState = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  };

  return (
    <ComponentsContext.Provider
      value={{
        components,
        setComponents,
        loading,
        setLoading,
        FilterButtonComponent,
        FilterCardComponent,
        dark,
        LoadingState,
        setDark,
        handleTheme,
      }}
    >
      {children}
    </ComponentsContext.Provider>
  );
};

export default ComponentsProvider;
