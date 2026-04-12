import { useContext } from "react";
import { ComponentsContext } from "../context/ComponentsContext";
import PreviewCards from "../Components/PreviewCards";
import PreviewCardSkeleton from "../Components/PreviewCardSkeleton";
const Buttons = () => {
  const { FilterButtonComponent, dark, loading, LoadingState } =
    useContext(ComponentsContext);
  const buttons = FilterButtonComponent();
  console.log(buttons);
  LoadingState();

  return (
    <div
      className={`flex flex-col pb-20 selection:bg-black selection:text-white justify-center items-center w-full max-h-full min-h-screen ${dark ? "bg-black" : "bg-[#e8e8e8]"}  gap-5`}
    >
      <header
        className={`mb-6 pt-5 text-4xl ${dark ? "text-white" : "text-black"} font-bold`}
      >
        <h1>Buttons Components</h1>
      </header>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-[80%]  place-items-center h-full ">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, i) => <PreviewCardSkeleton key={i} />)
          : buttons.map((item) => <PreviewCards item={item} key={item.id} />)}
      </div>
     
    </div>
  );
};

export default Buttons;
