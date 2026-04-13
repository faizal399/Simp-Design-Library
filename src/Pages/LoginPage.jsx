import { useContext } from "react";
import { useAuth } from "../context/AuthContext";
import { FaGithub } from "react-icons/fa";
import { ComponentsContext } from "../context/ComponentsContext";

const LoginPage = () => {
  const { loginWithProvider } = useAuth();
  const { dark } = useContext(ComponentsContext);
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${dark ? "from-zinc-900 to-black " : "bg-linear-to-br from-zinc-100 to-zinc-200"} px-4`}
    >
      <div
        className={`w-full max-w-md p-8 rounded-2xl backdrop-blur-xl ${dark ? "bg-white/70 border-black/10" : "bg-white/5 border border-white/10"} shadow-xl`}
      >
        <h2 className="text-2xl  font-semibold text-center mb-6">
          Welcome Back 👋
        </h2>

        <p className="text-center text-sm opacity-70 mb-8">
          Login to access premium components
        </p>

        <button
          onClick={() => loginWithProvider("github")}
          className="w-full flex cursor-pointer items-center justify-center gap-2 bg-black text-white py-3 rounded-xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-md"
        >
          <FaGithub className="text-lg" />
          Continue with GitHub
        </button>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-black/10 dark:bg-white/10" />
          <span className="text-xs opacity-50">OR</span>
          <div className="flex-1 h-px bg-black/10 dark:bg-white/10" />
        </div>

       
        <button
          onClick={() => loginWithProvider("google")}
          className="w-full cursor-pointer flex items-center justify-center gap-2 bg-white text-black border border-black/10 py-3 rounded-xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-sm"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <p className="text-xs text-center mt-6 opacity-60">
          Secure login powered by Supabase
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
