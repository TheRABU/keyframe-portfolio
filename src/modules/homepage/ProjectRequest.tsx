import SectionHeader from "@/components/SectionHeader";
import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ProjectRequest = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;
    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending your request...");

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY,
      );

      console.log("EmailJS Result:", result);

      if (result.text === "OK") {
        toast.success("Project request sent successfully!", {
          id: loadingToast,
        });
        formRef.current.reset();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.", {
        id: loadingToast,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-[#000000]">
        <div className="text-center">
          <SectionHeader props="Project Request" />
        </div>

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="max-w-5xl mx-auto mt-7 flex w-full flex-col p-5 space-y-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-3">
              <div className="mb-4 w-full lg:w-3/6">
                <label htmlFor="name" className="text-xl leading-7 text-white">
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full rounded-lg mt-2 border-0 border-gray-300 bg-gray-100/5 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200"
                />
              </div>

              <div className="mb-4 w-full lg:w-3/6">
                <label htmlFor="email" className="text-xl leading-7 text-white">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@doe.com"
                  className="w-full rounded-lg mt-2 border-0 border-gray-300 bg-gray-100/5 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200"
                />
              </div>
            </div>

            <div className="flex justify-between items-start w-full space-x-10">
              <div className="mb-6">
                <label className="text-2xl leading-7 text-white">
                  What Kind of Video Do You Need?
                </label>

                <div className="flex flex-col gap-2 mt-2">
                  <label className="flex flex-row items-center gap-2 text-neutral-400 text-lg select-none">
                    <input
                      type="radio"
                      name="video-type"
                      value="Long Form/Youtube Videos"
                    />
                    Long form/youtube videos
                  </label>

                  <label className="flex flex-row items-center gap-2 text-neutral-400 text-lg select-none">
                    <input type="radio" name="video-type" value="VSL" />
                    VSL
                  </label>

                  <label className="flex flex-row items-center gap-2 text-neutral-400 text-lg select-none">
                    <input
                      type="radio"
                      name="video-type"
                      value="Motion Graphic / VSL video"
                    />
                    Documentaries
                  </label>

                  <label className="flex flex-row items-center gap-2 text-neutral-400 text-lg select-none">
                    <input type="radio" name="video-type" value="Short form" />
                    Short form
                  </label>
                </div>
              </div>

              {/* Budget Range Radio Buttons */}

              <div className="mb-6">
                <label className="text-2xl leading-7 text-white">
                  What's Your Budget Range?
                </label>

                <div className="flex flex-col gap-2 mt-2">
                  <label className="flex flex-row items-center gap-2 text-neutral-400 text-lg select-none">
                    <input type="radio" name="budget-range" value="$250" />
                    $250
                  </label>

                  <label className="flex flex-row items-center gap-2 text-neutral-400 text-lg select-none">
                    <input type="radio" name="budget-range" value="$300-$400" />
                    $300-$400
                  </label>

                  <label className="flex flex-row items-center gap-2 text-neutral-400 text-lg select-none">
                    <input type="radio" name="budget-range" value="$500-$700" />
                    $500-$700
                  </label>

                  <label className="flex flex-row items-center gap-2 text-neutral-400 text-lg select-none">
                    <input type="radio" name="budget-range" value="$1k-$2k" />
                    $1k-$2k
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="text-2xl leading-7 text-white"
              >
                Share Your Vision
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="e.g. video references, design, Brand identity"
                className="h-32 w-full resize-none rounded-lg border-0 border-gray-300 bg-gray-100/5 mt-2 py-1 px-3 text-base leading-6 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`rounded-lg border-0 bg-gray-100/5 py-3 px-6 text-lg text-white transition-all
              ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-[#5B23FF]"}
              focus:outline-none`}
            >
              {isSubmitting ? "Processing..." : "Send Request"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProjectRequest;
