import course1 from "../../public/course1.webp";
import course2 from "../../public/course2.webp";
import course3 from "../../public/course3.webp";

const navbarList = ["HOME", "LEARNING", "COMMUNITY", "HELP & FAQ"];

const feature = [
  {
    id: 0,
    title: "🟣 Adaptive Learning",
    content:
      "Experience tailored lessons that adapt to your individual learning pace.",
  },
  {
    id: 1,
    title: "🟠 Interactive Lessons",
    content:
      "Engage in lessons filled with dynamic quizzes, speaking exercises, and more.",
  },
  {
    id: 2,
    title: "🟢 Global Community",
    content:
      "Join a community of language learners and native speakers to practice with.",
  },
];

const testimonial = [
  {
    id: 0,
    content:
      '"I\'ve never learned a language so efficiently! The adaptive learning really makes a difference."',
    writer: "- Sarah, New York",
  },
  {
    id: 1,
    content:
      '"The community here is so welcoming. I\'ve made friends and language partners from all over the world."',
    writer: "- Jae, Seoul",
  },
];

const course = [
  {
    id: 0,
    img: course1,
    title: "Beginner Korean *",
    content:
      "Start your journey with the basics of Korean grammar and vocabulary.",
  },
  {
    id: 0,
    img: course2,
    title: "Intermediate Korean Conversations *",
    content: "Dive into day-to-day dialogues and polish your speaking skills.",
  },
  {
    id: 0,
    img: course3,
    title: "Advanced Korean Writing *",
    content: "Master the art of writing in Korean with comprehensive lessons.",
  },
  {
    id: 0,
    img: course3,
    title: "Advanced Korean Writing *",
    content: "Master the art of writing in Korean with comprehensive lessons.",
  },
  {
    id: 0,
    img: course3,
    title: "Advanced Korean Writing *",
    content: "Master the art of writing in Korean with comprehensive lessons.",
  },
];

export { navbarList, feature, testimonial, course };
