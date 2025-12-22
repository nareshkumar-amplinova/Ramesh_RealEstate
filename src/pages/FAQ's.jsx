import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const faqs = [
  {
    question: "What approvals does the project have?",
    answer: (
      <div className="space-y-2 text-sm text-slate-600">
        <p>
          Our project has received all necessary approvals from the relevant authorities,
          including:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Municipal Corporation Building Plan Approval</li>
          <li>Environmental Clearance Certificate</li>
          <li>RERA Registration (TSRERA/PRJ/123456/2023)</li>
          <li>Fire Safety NOC</li>
          <li>Electricity Board Approval</li>
        </ul>
        <p>
          All documents are available for verification at our site office.
        </p>
      </div>
    ),
  },
  {
    question: "Are bank loans available for this project?",
    answer: (
      <div className="space-y-2 text-sm text-slate-600">
        <p>
          Yes, we have tie-ups with leading banks and financial institutions offering
          attractive home loan options.
        </p>
        <p>
          Our team assists with documentation and the loan process. Loan tenure is
          available up to 30 years with competitive interest rates.
        </p>
      </div>
    ),
  },
  {
    question: "When will construction begin and what is the completion timeline?",
    answer: (
      <div className="space-y-3 text-sm text-slate-600">
        <div>
          <p className="font-medium text-slate-800">Foundation Work</p>
          <p>Completed in March 2023</p>
        </div>
        <div>
          <p className="font-medium text-slate-800">Structural Work</p>
          <p>Currently in progress (60% completed)</p>
        </div>
        <div>
          <p className="font-medium text-slate-800">Finishing Work</p>
          <p>Starting from January 2024</p>
        </div>
        <div>
          <p className="font-medium text-slate-800">Project Handover</p>
          <p>Expected by December 2024</p>
        </div>
      </div>
    ),
  },
  {
    question: "What amenities are included in the project?",
    answer: (
      <div className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600">
        <p>• Swimming Pool</p>
        <p>• Fitness Center</p>
        <p>• Landscaped Gardens</p>
        <p>• Children’s Play Area</p>
        <p>• 24/7 Security</p>
        <p>• Jogging Track</p>
      </div>
    ),
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about our real estate project.
            If you need more information, feel free to contact our team.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg bg-white"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="font-medium text-slate-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-primary text-sm" />
                ) : (
                  <FaChevronDown className="text-slate-400 text-sm" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-700 mb-6">
            Still have questions? We’re here to help!
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-md font-medium">
              Schedule a Site Visit
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-md font-medium">
              Request a Call Back
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
