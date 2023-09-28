import course1 from "../../public/course1.webp";
import course2 from "../../public/course2.webp";
import course3 from "../../public/course3.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBook, faComment } from "@fortawesome/free-solid-svg-icons";

// const navbarList = ["HOME", "LEARNING", "COMMUNITY", "HELP & FAQ"];

const navbarList = [
  {
    id: 0,
    menu: "HOME",
    subMenu: [],
  },
  {
    id: 1,
    menu: "LEARNING",
    subMenu: ["Course", "Practice"],
  },
  {
    id: 2,
    menu: "COMMUNITY",
    subMenu: ["Discussions"],
  },
  {
    id: 3,
    menu: "FAQ",
    subMenu: ["FAQ", "Contact Us"],
  },
];

const feature = [
  {
    id: 0,
    // 🟣
    title: "Adaptive Learning",
    content:
      "Experience tailored Korean lessons that adapt to your individual learning pace.",
    icon: (
      <FontAwesomeIcon
        icon={faBook}
        style={{ marginRight: "10px", color: "#FF964f" }}
      />
    ),
  },
  {
    id: 1,
    // 🟠
    title: "Interactive Lessons",
    content:
      "Engage in lessons filled with dynamic quizzes, speaking exercises, and more.",
    icon: (
      <FontAwesomeIcon
        icon={faComment}
        style={{ marginRight: "10px", color: "#8c65d3" }}
      />
    ),
  },
  {
    id: 2,
    // 🟢
    title: "Global Community",
    content:
      "Join a community of Korean language learners and native speakers to practice with.",
    icon: (
      <FontAwesomeIcon
        icon={faUsers}
        style={{ marginRight: "10px", color: "#94fa92" }}
      />
    ),
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
      '"The community here is so welcoming. I\'ve made friends and language partners from all over the world. 감사합니다!"',
    writer: "- Jae, Seoul",
  },
];

const course = [
  {
    id: 0,
    img: course1,
    difficulty: "beginner",
    title: "Beginner Korean *",
    content:
      "Start your journey with the basics of Korean grammar and vocabulary.",
  },
  {
    id: 1,
    img: course2,
    difficulty: "intermediate",
    title: "Intermediate Korean Conversations *",
    content: "Dive into day-to-day dialogues and polish your speaking skills.",
  },
  {
    id: 2,
    img: course3,
    difficulty: "advanced",
    title: "Advanced Korean Writing *",
    content: "Master the art of writing in Korean with comprehensive lessons.",
  },
  {
    id: 2,
    img: course3,
    difficulty: "advanced",
    title: "Advanced Korean Writing *",
    content: "Master the art of writing in Korean with comprehensive lessons.",
  },
];

const pathStep = [
  {
    id: 0,
    number: 1,
    content: "Introduction to Korean Alphabets (Hangul)",
  },
  {
    id: 1,
    number: 2,
    content: "Basic Vocabulary and Grammar",
  },
  {
    id: 2,
    number: 3,
    content: "Intermediate Conversational Practices",
  },
  {
    id: 3,
    number: 4,
    content: "Advanced Composition and Reading",
  },
];

const sortBtn: string[] = ["All", "Beginner", "Intermediate", "Advanced"];

export { navbarList, feature, testimonial, course, pathStep, sortBtn };
