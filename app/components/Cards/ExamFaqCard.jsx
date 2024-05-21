"use client";
import { useState } from "react";

const ExamFaqCard = ({ examData }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleFaqClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      style={{ backgroundImage: `url('/240_F_434119329_ClLhtcZKL2375Ug3qKqzJjSxZov7cqWe.jpg')` }}
      className="py-6 bg-cover bg-fixed"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mt-6 text-4xl font-bold font-heading text-gray-600">
            {examData.exam_title} FAQ&apos;s
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {Array.isArray(examData.exam_faqs) &&
            examData.exam_faqs.map((faq, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="relative py-1">
                  <div className="flex">
                    <span className=" mt-6 flex min-w-16 h-12 pl-4 items-center clip-path-right-top bg-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        viewBox="0 0 26 26"
                      >
                        <path
                          fill="white"
                          d="M13 0c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6l4 4v-4c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm4.188 3h1.718l1.688 6h-1.5l-.407-1.5h-1.5L16.813 9H15.5zM18 4c-.1.4-.212.888-.313 1.188l-.28 1.312h1.187l-.282-1.313C18.113 4.888 18 4.4 18 4M3 10c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3v4l4-4h6c1.7 0 3-1.3 3-3v-6h-3c-1.9 0-3.406-1.3-3.906-3zm4.594 2.906c1.7 0 2.5 1.4 2.5 3c0 1.4-.481 2.288-1.281 2.688c.4.2.874.306 1.374.406l-.374 1c-.7-.2-1.426-.512-2.126-.813c-.1-.1-.275-.093-.375-.093C6.112 18.994 5 18 5 16c0-1.7.994-3.094 2.594-3.094m0 1.094c-.8 0-1.188.9-1.188 2c0 1.2.388 2 1.188 2c.8 0 1.218-.9 1.218-2s-.418-2-1.218-2"
                        />
                      </svg>
                    </span>{" "}
                    <h3
                      className="mt-5 ml-2 mb-8  text-lg font-bold font-heading text-gray-600 cursor-pointer"
                      onClick={() => handleFaqClick(index)}
                    >
                      {faq.faq_q}
                    </h3>
                    <div
                      className="mt-6 cursor-pointer"
                      onClick={() => handleFaqClick(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.8em"
                        height="1.8em"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill="gray"
                            d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <p
                    className={`text-base text-gray-500 font-semibold text-justify overflow-hidden transition-all duration-500 ${
                      expandedIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {faq.faq_a}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ExamFaqCard;
