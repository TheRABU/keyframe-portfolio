import { FaInstagram, FaYoutube } from "react-icons/fa";

interface ClientCardProps {
  image: string;
  name: string;
  stats: string;
  views?: string;
  link: string;
  platform: "instagram" | "youtube";
}

const ClientCard = ({
  image,
  name,
  stats,
  link,
  platform,
}: ClientCardProps) => {
  const PlatformIcon = platform === "instagram" ? FaInstagram : FaYoutube;
  return (
    <>
      <main className="flex flex-col">
        <div className="relative group w-44 sm:w-48 md:w-52 lg:w-56 xl:w-[152px] flex-shrink-0 cursor-pointer">
          {/* Card image */}
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src={image}
              alt={name}
              className="h-52 w-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Hover overlay (eye + views) */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300">
            <div className="flex items-center gap-2 text-white text-sm font-medium">
              <PlatformIcon className="w-7 h-7" />
              {/* {views} */}
            </div>
          </div>

          {/* Card text */}
        </div>
        <a href={link} target="_blank">
          <div className="mt-2 text-center">
            <h3 className="font-semibold hover:underline text-white">{name}</h3>
            <p className="text-gray-400 text-sm">{stats}</p>
          </div>
        </a>
      </main>
    </>
  );
};

export default ClientCard;
