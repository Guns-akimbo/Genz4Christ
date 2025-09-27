import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { faqs } from "../utils";

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-[#334238] mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-gray-200 rounded-lg shadow-sm p-4 transition-all duration-300 bg-white"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleClick(faq.id)}
            >
              <h3 className="text-base font-semibold text-[#334238]">
                {faq.question}
              </h3>
              {openFaq === faq.id ? (
                <FiMinus className="text-[#334238]" size={20} />
              ) : (
                <GoPlus className="text-[#334238]" size={20} />
              )}
            </div>
            {openFaq === faq.id && (
              <p 
                className="mt-4 text-gray-700 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
