import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is our return policy?",
      answer:
        "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You will receive an email with a tracking number once your order has shipped. You can use this number to track your order on our website.",
    },
    {
      question: "Do we offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "You can change or cancel your order within 24 hours of placing it. Please contact our customer service team for assistance.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team via email at support@gamerjunction.com. Our support hours are Monday through Friday, 9 AM to 6 PM. EST",
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="faq-toggle">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
