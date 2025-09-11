import ReactPlayer from "react-player";

interface ProjectCardProps {
  url: string;
  title?: string;
  width?: string;
  height?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  url,
  title,
  width = "100%",
  height = "100%",
}) => {
  return (
    <div className="w-full overflow-hidden rounded-xl shadow-lg">
      <ReactPlayer
        src={url}
        width={width}
        height={height}
        controls
        className="react-player"
      />
      {title && (
        <h3 className="mt-2 text-white text-center text-sm font-medium">
          {title}
        </h3>
      )}
    </div>
  );
};

export default ProjectCard;
