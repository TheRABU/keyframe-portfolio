interface SectionHeaderProps {
  props: string;
}

const SectionHeader = ({ props }: SectionHeaderProps) => {
  return (
    <>
      <button className="rounded-full border-1 border-[#5B23FF] p-3 text-sm text-white font-semibold bg-[#160441] ">
        {props}
      </button>
    </>
  );
};

export default SectionHeader;
