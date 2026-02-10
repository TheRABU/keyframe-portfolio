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

    // Extract values using the "name" attributes defined in the inputs below
    const formData = new FormData(formRef.current);
    const userName = formData.get("user_name") as string;
    const userEmail = formData.get("user_email") as string;
    const videoType = formData.get("video_type") as string;
    const budget = formData.get("budget_range") as string;

    // --- VALIDATION ---
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

    // --- SENDING ---
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
        {/* Main Flex Container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side - Contact Details (1/3) */}
          <div className="lg:w-1/3">
            <div className="relative pl-6">
              {/* Vertical Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600"></div>

              {/* Keyframe Brand */}
              <h2 className="text-5xl md:text-6xl font-bold text-indigo-600 mb-8">
                Keyframe
              </h2>

              {/* Contacts Heading */}
              <h3 className="text-3xl font-bold text-white mb-8">
                Business Information & Contacts
              </h3>

              {/* Contact Information */}
              <div className="space-y-3 text-white">
                {/* Business Owner */}
                <div>
                  <p className="text-sm text-gray-400">Account Holder</p>
                  <p className="text-xl font-semibold">Samad Ahmed</p>
                </div>

                <div className="email mb-6">
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-lg">samadahmed1806@gmail.com</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Business email</p>
                    <p className="text-lg">director.keyframe@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  {/* <p className="text-sm text-gray-400 mb-1">Phone</p> */}
                  <p className="text-sm">+880 1971429773</p>
                </div>

                {/* Address */}
                <div>
                  {/* <p className="text-sm text-gray-400 mb-1">Address</p> */}
                  <p className="text-sm">
                    295 F Tali Office Road,
                    <br />
                    Dhaka, 1209, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Project Request Form (2/3) */}
          <div className="lg:w-2/3">
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
      </div>
    </div>
  );
};

export default ProjectRequest;
