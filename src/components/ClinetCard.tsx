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
    <main className="flex flex-col">
      {/* Wrapping the entire block in a single anchor tag ensures 
          the whole card is clickable and avoids z-index/layering issues.
      */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block w-44 sm:w-48 md:w-52 lg:w-56 xl:w-[152px] flex-shrink-0"
      >
        <div className="relative">
          {/* Image Container */}
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src={image}
              alt={name}
              className="h-52 w-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Hover overlay 
              Added 'pointer-events-none' so clicks pass through to the parent <a> 
          */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
            <div className="flex items-center gap-2 text-white text-sm font-medium">
              <PlatformIcon className="w-7 h-7" />
            </div>
          </div>
        </div>

        {/* Card text - Now inside the anchor for better UX */}
        <div className="mt-2 text-center">
          <h3 className="font-semibold group-hover:underline text-white">
            {name}
          </h3>
          <p className="text-gray-400 text-sm">{stats}</p>
        </div>
      </a>
    </main>
  );
};

export default ClientCard;
