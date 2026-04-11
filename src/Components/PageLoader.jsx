import React, { useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { ComponentsContext } from "../context/ComponentsContext";
const PageLoader = () => {
  const { dark } = useContext(ComponentsContext);
  return (
    <div
      className={`h-screen w-full justify-center items-center flex ${dark ? "bg-black" : "bg-[#e8e8e8]"}`}
    >
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color={`${dark ? "#e8e8e8" : "black"}`}
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default PageLoader;
