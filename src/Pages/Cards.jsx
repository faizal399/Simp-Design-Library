
import { ComponentsContext } from "../context/ComponentsContext.jsx";
import { useContext } from "react";
import PreviewCards from "../Components/PreviewCards";
import PreviewCardSkeleton from "../Components/PreviewCardSkeleton.jsx";
const Cards = () => {
  const { dark, FilterCardComponent, loading, LoadingState } =
    useContext(ComponentsContext);
  const cards = FilterCardComponent();
  console.log(cards);
  LoadingState();
  return (
    <>
      <div
        className={`flex pb-20 flex-col selection:bg-black selection:text-white ${dark ? "bg-black" : "bg-[#e8e8e8]"} items-center w-full gap-5 min-h-screen`}
      >
        <div
          className={`mb-6 pt-5 text-4xl ${dark ? "text-white" : "text-black"} font-bold`}
        >
          <h1>Cards Components</h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-[80%]  justify-center items-center">
          {loading
            ? Array(6)
                .fill(0)
                .map((_, i) => <PreviewCardSkeleton key={i} />)
            : cards.map((item) => <PreviewCards item={item} key={item.id} />)}
        </div>
      </div>
    </>
  );
};

export default Cards;
