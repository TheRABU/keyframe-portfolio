const Accordion = () => {
  return (
    <>
      <div className="h-auto">
        <div className="text-center mb-2 mt-2">
          <h1 className="text-2xl lg:text-4xl text-neutral-500 font-semibold">
            All your Questions <span className="text-white">Answered</span>
          </h1>
        </div>
        <div className="collapse collapse-arrow text-2xl text-white bg-[#131010] border border-base-300 my-3">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            What type of videos do you edit?
          </div>
          <div className="collapse-content text-sm">
            I specialize in YouTube long-form videos, faceless documentaries,
            and VSLs, with a strong focus on retention, pacing, and clarity.
          </div>
        </div>
        <div className="collapse collapse-arrow text-2xl text-white bg-[#131010] border border-base-300 my-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How does the editing process work?
          </div>
          <div className="collapse-content text-sm">
            You send the raw footage and references. I handle the full edit
            (structure, pacing, visuals, sound design). Revisions are included
            based on the agreed scope.
          </div>
        </div>
        <div className="collapse collapse-arrow text-2xl text-white bg-[#131010] border border-base-300 my-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How long does an edit usually take?
          </div>
          <div className="collapse-content text-sm">
            Turnaround depends on video length and complexity. Most YouTube
            edits take 2–5 days, documentaries typically take 5–7 days, while
            VSLs may take longer due to structure and testing requirements.
          </div>
        </div>
        <div className="collapse collapse-arrow text-2xl text-white bg-[#131010] border border-base-300 my-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Do you focus on retention and performance, or just visuals?
          </div>
          <div className="collapse-content text-sm">
            Performance comes first. Every edit is optimized for watch time,
            engagement, and conversions — visuals support the story, not
            distract from it.
          </div>
        </div>
        <div className="collapse collapse-arrow text-2xl text-white bg-[#131010] border border-base-300 my-3">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How do I get started?
          </div>
          <div className="collapse-content text-sm">
            Book a quick call through Calendly. We’ll discuss your content,
            goals, and see if we’re a good fit before starting.
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
