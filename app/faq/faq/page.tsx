import "./page.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is VocaVista?",
    answer:
      "VocaVista is a cutting-edge E-Learning platform offering adaptive Korean language learning experiences tailored to individual learning paces.",
  },
  {
    question: "How does the adaptive learning work?",
    answer:
      "Our adaptive learning system tracks your progress and performance, adapting the curriculum in real-time to offer personalized lessons that address your unique strengths and weaknesses.",
  },
  {
    question: "Can I interact with other learners and native speakers?",
    answer:
      "Absolutely! VocaVista offers a vibrant community feature where you can practice, interact, and learn with fellow Korean language enthusiasts and native speakers.",
  },
  // Add more FAQs as needed
];

export default function FAQSection() {
  return (
    <div className="faqSection">
      <h1 className="faqHeader">
        FAQ
        <FontAwesomeIcon
          icon={faCircleQuestion}
          style={{ marginLeft: "13px" }}
        />
      </h1>

      <p className="faqSubHeader">
        Find quick answers to your questions about our adaptive learning
        features, community interactions, and more
      </p>

      {faqs.map((faq, index) => (
        <div key={index} className="faq">
          <input type="checkbox" id={`faq${index}`} className="toggle" />
          <label htmlFor={`faq${index}`} className="question">
            <FontAwesomeIcon
              icon={faSquareCheck}
              style={{ marginRight: "13px" }}
            />
            {faq.question}
          </label>
          <p className="answer">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
