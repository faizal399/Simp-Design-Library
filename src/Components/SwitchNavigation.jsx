import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { ComponentsContext } from "../context/ComponentsContext";

const SwitchNavigation = () => {
  const location = useLocation();
  const { dark } = useContext(ComponentsContext);

  const options = [
    { name: "Home", path: "/" },
    { name: "Button", path: "/buttons" },
    { name: "Card", path: "/cards" },
    { name: "Input", path: "/inputs" },
  ];

  const activeIndex = options.findIndex(
    (item) => item.path === location.pathname || 0,
  );

  return (
    <div
      className={`
      relative grid grid-flow-col auto-cols-fr
      p-[3px]
      rounded-lg
      border overflow-hidden

      ${dark ? "bg-black border-[#1a1a1a]" : "bg-[#e8e8e8] border-gray-300"}
      `}
    >
      {/* Slider */}
      <div
        className={`
        absolute top-[3px] left-[3px]
        h-[calc(100%-6px)]
        rounded-md
        transition-all duration-500
        ease-[cubic-bezier(0.22,0.9,0.25,1)]

        ${dark ? "bg-[#222]" : "bg-white"}
        `}
        style={{
          width: `calc((100% - 6px) / ${options.length})`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />

      {/* Tabs */}
      {options.map((item, i) => (
        <Link
          key={i}
          to={item.path}
          className={`
          relative z-10
          flex items-center justify-center

          px-2 sm:px-3
          py-1.5

          text-[10px] sm:text-[11px]
          font-medium
          whitespace-nowrap

          transition-all duration-300

          ${
            location.pathname === item.path
              ? dark
                ? "text-white"
                : "text-black"
              : dark
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-black"
          }

          active:scale-95
          `}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default SwitchNavigation;
