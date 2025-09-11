import SectionHeader from "@/components/SectionHeader";

const ProjectRequest = () => {
  return (
    <>
      <div>
        <div className="text-center mt-2">
          <SectionHeader props="Project Request" />
        </div>
        <form action="https://fabform.io/f/xxxxx" method="post" />

        <div className="max-w-5xl mx-auto mt-16 flex w-full flex-col border rounded-lg p-8">
          <div className="flex items-center justify-between space-x-3">
            <div className="mb-4 w-3/6">
              <label htmlFor="email" className="text-2xl leading-7 text-white">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full rounded border border-gray-300 bg-neutral-800 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4 w-3/6">
              <label htmlFor="email" className="text-2xl leading-7 text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@doe.com"
                className="w-full rounded border border-gray-300 bg-neutral-800 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-2xl leading-7 text-white">
              Share Your Vision
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="e.g. video references, design, Brand identity"
              className="h-32 w-full resize-none rounded border border-gray-300 bg-neutral-800 py-1 px-3 text-base leading-6 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            ></textarea>
          </div>
          <button className="rounded border-0 bg-neutral-800 py-2 px-6 text-lg text-white hover:bg-indigo-400 focus:outline-none">
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectRequest;
