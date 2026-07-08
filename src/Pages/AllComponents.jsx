import React, { useContext } from "react";
import { ComponentsContext } from "../context/ComponentsContext";
import PreviewCardSkeleton from "../Components/PreviewCardSkeleton";
import PreviewCards from "../Components/PreviewCards";
const AllComponents = () => {
  const { dark, components, loading } = useContext(ComponentsContext);

  const cards = components;
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
          Components
        </h1>
        <p className="text-xm sm:text-sm opacity-70 mt-3 max-w-2xl leading-relaxed">
          Explore beautifully crafted and fully responsive card components built
          with modern UI principles. Perfect for dashboards, portfolios, SaaS
          products, blogs, and web applications.
        </p>
      </header>

      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, i) => <PreviewCardSkeleton key={i} />)
          : cards.map((item) => <PreviewCards item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default AllComponents;
