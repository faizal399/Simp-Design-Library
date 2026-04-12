import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
export default function SocialShare() {
  const socials = [
    {
      name: "Instagram",
      username: "@__faizy___07",
      icon: FaInstagram,
      color: "#cc39a4",
      link: "https://www.instagram.com/__faizy___07/?__pwa=1",
    },
    {
      name: "Twitter",
      username: "@faizy__007",
      icon: FaTwitter,
      color: "#03A9F4",
      link: "https://x.com/faizy__007",
    },
    {
      name: "GitHub",
      username: "@faizal399",
      icon: FaGithub,
      color: "#000",
      link: "https://github.com/faizal399",
    },
  ];

  return (
    <div className="flex gap-4 mt-2.5 flex-col md:flex-row ">
      {socials.map((item, i) => {
        const Icon = item.icon;

        return (
          <div key={i} className="relative group">
            {/* Button */}
            <a
            href={item.link}
            target="__blank"
            rel="noopener noreferrer"
            
              className="w-12 cursor-pointer h-12 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:bg-[var(--hoverColor)]"
              style={{ "--hoverColor": item.color }}
            >
              <Icon className="text-xl transition-all duration-300 text-[var(--hoverColor)] group-hover:text-white" />
            </a>

            {/* Tooltip */}
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[-140px] w-28 h-32 bg-gray-100 text-black rounded-xl p-3 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 z-10">
              {/* Avatar */}
              <div className="w-16 h-16 bg-white mx-auto flex items-center justify-center rounded-lg">
                <Icon className="text-2xl text-black" />
              </div>

              <div className="mt-2 text-sm text-center">{item.name}</div>
              <div className="text-[10px] text-center font-bold">
                {item.username}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
