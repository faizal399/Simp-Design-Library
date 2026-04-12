import { useState, createContext, useEffect,  } from "react";
import { supabase } from "../lib/supabase";
export const ComponentsContext = createContext();

const ComponentsProvider = ({ children }) => {

  const [components, setComponents] = useState([]);
  const [dark, setDark] = useState(null);
  const [loading, setLoading] = useState(null);
  
  const fetchComponents = async () => {

    setLoading(true)

    const { data, error } = await supabase.from("components").select("*");

    if (error) {
      console.log("Supabase Error: ", error);
    } else {
      setComponents(data);
    }
    setLoading(false)
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
    const filtercard = components.filter(
      (button) => button.category?.toLowerCase() === "card",
    );
    return filtercard;
  };
  const FilterInputComponent = () => {
    const filterinput = components.filter(
      (button) => button.category?.toLowerCase() === "input",
    );
    return filterinput;
  };

  const handleTheme = () => {
    setDark(!dark);
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
        FilterInputComponent,
        dark,
        setDark,
        handleTheme,
      }}
    >
      {children}
    </ComponentsContext.Provider>
  );
};

export default ComponentsProvider;
