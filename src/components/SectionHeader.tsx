interface SectionHeaderProps {
  props: string;
}

const SectionHeader = ({ props }: SectionHeaderProps) => {
  return (
    <>
      <button className="rounded-full border-1 border-amber-300 p-3 text-sm text-yellow-300 font-semibold bg-[#4d4707] ">
        {props}
      </button>
    </>
  );
};

export default SectionHeader;
