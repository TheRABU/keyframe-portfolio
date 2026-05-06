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

    const formData = new FormData(formRef.current);
    const userName = formData.get("user_name") as string;
    const userEmail = formData.get("user_email") as string;
    const videoType = formData.get("video_type") as string;
    const budget = formData.get("budget_range") as string;

    if (!userName || userName.trim() === "") {
      return toast.error("Please enter your full name.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userEmail || !emailRegex.test(userEmail)) {
      return toast.error("Please enter a valid email address.");
    }

    if (!videoType) {
      return toast.error("Please select what kind of video you need.");
    }

    if (!budget) {
      return toast.error("Please select a budget range.");
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending your request to Keyframe...");

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
    <div className="bg-[#000000] py-16">
      <div className="text-center mb-12">
        <SectionHeader props="Contact us" />
      </div>

      <div className="max-w-7xl mx-auto px-5">
        <form ref={formRef} onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col space-y-10">
            {/* Name & Email Row */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-6 space-y-6 md:space-y-0">
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="name"
                  className="text-xl leading-7 text-white block mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Your Name"
                  className="w-full rounded-lg border-0 border-gray-300 bg-gray-100/5 py-3 px-4 text-base text-gray-100 outline-none transition-colors focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div className="w-full md:w-1/2">
                <label
                  htmlFor="email"
                  className="text-xl leading-7 text-white block mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="john@doe.com"
                  className="w-full rounded-lg border-0 border-gray-300 bg-gray-100/5 py-3 px-4 text-base text-gray-100 outline-none transition-colors focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Selection Row */}
            <div className="flex flex-col md:flex-row justify-between items-start w-full space-y-8 md:space-y-0 md:space-x-10">
              {/* Video Type Selection */}
              <div className="flex-1">
                <label className="text-xl leading-7 text-white block mb-4">
                  What Kind of Video Do You Need?
                </label>
                <div className="flex flex-col gap-3">
                  {[
                    "Long Form/Youtube Videos",
                    "VSL",
                    "Documentaries",
                    "Short form",
                  ].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-3 text-neutral-400 text-base cursor-pointer hover:text-white transition-colors"
                    >
                      <input
                        type="radio"
                        name="video_type"
                        value={item}
                        className="w-5 h-5 accent-indigo-500"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget Selection */}
              <div className="flex-1">
                <label className="text-xl leading-7 text-white block mb-4">
                  What's Your Budget Range?
                </label>
                <div className="flex flex-col gap-3">
                  {["$250", "$300-$400", "$500-$700", "$1k-$2k"].map(
                    (range) => (
                      <label
                        key={range}
                        className="flex items-center gap-3 text-neutral-400 text-base cursor-pointer hover:text-white transition-colors"
                      >
                        <input
                          type="radio"
                          name="budget_range"
                          value={range}
                          className="w-5 h-5 accent-indigo-500"
                        />
                        {range}
                      </label>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label
                htmlFor="message"
                className="text-xl leading-7 text-white block mb-3"
              >
                Share Your Vision
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="e.g. video references, design, Brand identity"
                className="h-32 w-full resize-none rounded-lg border-0 border-gray-300 bg-gray-100/5 py-3 px-4 text-base text-gray-100 outline-none transition-colors focus:ring-1 focus:ring-indigo-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full rounded-lg py-4 px-8 text-xl font-semibold text-white transition-all
                ${isSubmitting ? "bg-gray-600 cursor-not-allowed" : "bg-indigo-600 hover:bg-[#5B23FF] shadow-lg shadow-indigo-500/20"}
              `}
            >
              {isSubmitting ? "Sending Request..." : "Send Request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectRequest;
