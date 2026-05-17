import { ComponentsContext } from "../context/ComponentsContext.jsx";
import { useContext } from "react";
import PreviewCards from "../Components/PreviewCards";
import PreviewCardSkeleton from "../Components/PreviewCardSkeleton.jsx";

const Cards = () => {
  const { dark, FilterCardComponent, loading } =
    useContext(ComponentsContext);

  const cards = FilterCardComponent();

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
          Card Components
        </h1>
        <p className="text-sm sm:text-base opacity-70 mt-3 max-w-2xl leading-relaxed">
  Explore beautifully crafted and fully responsive card components built with
  modern UI principles. Perfect for dashboards, portfolios, SaaS products,
  blogs, and web applications.
</p>

<p className="text-xs sm:text-sm opacity-50 mt-2 max-w-xl">
  Includes interactive hover effects, smooth animations, dark mode support,
  reusable layouts, and clean Tailwind CSS styling for faster development.
</p>
      </header>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, i) => <PreviewCardSkeleton key={i} />)
          : cards.map((item) => (
              <PreviewCards item={item} key={item.id} />
            ))}
      </div>
    </div>
  );
};

export default Cards;