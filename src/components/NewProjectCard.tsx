const NewProjectCard = ({ link, img }: { link: string; img: string }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full aspect-video rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
    >
      {/* Thumbnail Image */}
      <img
        className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
        src={img}
        alt="Video thumbnail"
      />

      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all duration-300">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
          <svg
            className="w-8 h-8 text-black ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default NewProjectCard;
