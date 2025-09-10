interface SectionHeaderProps {
  props: string;
}

const SectionHeader = ({ props }: SectionHeaderProps) => {
  return (
    <>
      <button className="rounded-full border-2 border-amber-300 py-3 px-3 text-2xl text-yellow-500 font-semibold bg-yellow-600 ">
        {props}
      </button>
    </>
  );
};

export default SectionHeader;
