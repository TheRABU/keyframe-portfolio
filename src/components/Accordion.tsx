const Accordion = () => {
  return (
    <>
      <div className="h-auto">
        <div className="text-center mb-2 mt-2">
          <h1 className="text-2xl lg:text-4xl text-neutral-500 font-semibold">
            All your Questions <span className="text-white">Answered</span>
          </h1>
        </div>
        <div className="collapse collapse-arrow text-3xl text-white bg-[#131010] border border-base-300 my-3">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            Do you guarantee results ?
          </div>
          <div className="collapse-content text-sm">
            Yes — in 99% of cases, I do. I've delivered proven results for tons
            of clients across various niches. There's no reason it shouldn't
            work for you too."
          </div>
        </div>
        <div className="collapse collapse-arrow text-3xl text-white bg-[#131010] border border-base-300 my-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How fast i'll get my videos ?
          </div>
          <div className="collapse-content text-sm">
            It depends on the form and length of the video. For short videos,
            the turnaround is usually around 2–3 days. For longer videos (7–10
            minutes), it typically takes around 7–9 days."
          </div>
        </div>
        <div className="collapse collapse-arrow text-3xl text-white bg-[#131010] border border-base-300 my-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Can I request specific video themes or styles ?
          </div>
          <div className="collapse-content text-sm">
            Absolutely! I can customize each video to match your brand’s unique
            style and vision
          </div>
        </div>
        <div className="collapse collapse-arrow text-3xl text-white bg-[#131010] border border-base-300 my-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Do you offer any FREE revisions ?
          </div>
          <div className="collapse-content text-sm">
            Do you offer any FREE revisions ?
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
