import { ComponentsContext } from "../context/ComponentsContext.jsx";
import { useContext } from "react";
import PreviewCards from "../Components/PreviewCards";
import PreviewCardSkeleton from "../Components/PreviewCardSkeleton.jsx";

const Inputs = () => {
  const { dark, FilterInputComponent, loading } =
    useContext(ComponentsContext);

  const inputs = FilterInputComponent();

  return (
    <div
      className={`
      min-h-screen
      px-4 sm:px-6 md:px-10 lg:px-16
      pb-20
      transition-colors duration-300

      ${dark ? "bg-black text-white" : "bg-[#f5f5f5] text-black"}
      `}
    >
      {/* Header */}
      <header className="max-w-6xl mx-auto pt-10 mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Input Components
        </h1>
        <p className="text-sm opacity-70 mt-2">
          Explore modern input fields with smooth interactions and clean UI design.
        </p>
      </header>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, i) => <PreviewCardSkeleton key={i} />)
          : inputs.map((item) => (
              <PreviewCards item={item} key={item.id} />
            ))}
      </div>
    </div>
  );
};

export default Inputs;