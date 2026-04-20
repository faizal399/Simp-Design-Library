import React, { useContext, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { ComponentsContext } from "../context/ComponentsContext";
import { CgProfile } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
const UserMenu = () => {
  const { user, logout } = useAuth();
  const { dark } = useContext(ComponentsContext);
  const [open, setOpen] = useState(false);
  const name =
    user?.user_metadata?.full_name || user?.user_metadata?.user_name || "User";
  const avatar =
    user?.user_metadata?.avatar_url ||
    user?.user_metadata?.picture ||
    `https://ui-avatars.com/api/?name=${user?.email}`;

  const email = user?.user_metadata?.email;
  //   console.log(user.user_metadata.avatar_url);

  if (!user) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <img
        src={avatar}
        alt="avatar"
        className="w-8 h-8 border cursor-pointer rounded-full hover:scale-101 "
      />
      {open && (
        <div
          className={`absolute z-100 right-0 backdrop-blur-2xl  h-fit w-fit p-2 rounded-md border-[white] border ${dark ? "bg-[#1A1A1A]/80 border-black" : "bg-[#e1e1e1]/80 border-[white]"} `}
        >
          <div className="mb-2">
            <p className="text-xs font-semibold">{name}</p>
            <p className="text-xs font-semibold opacity-60">{email}</p>
          </div>
          <div className="text-xs font-semibold flex flex-col items-start gap-1 border-t border-black/20 py-1">
            <button className="cursor-pointer hover:underline underline-offset-1 transition-all flex justify-center items-center gap-1 duration-300 ">
              <span>
                <CgProfile />
              </span>
              My Profile
            </button>
            <button className="cursor-pointer hover:underline underline-offset-1 transition-all flex justify-center items-center gap-1 duration-300 ">
              <span>
                <FaRegStar />
              </span>
              My Favorites
            </button>
            <button
              className="cursor-pointer hover:underline underline-offset-1 transition-all flex justify-center items-center gap-1 duration-300 "
              onClick={logout}
            >
              <span>
                <IoIosLogOut />
              </span>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
