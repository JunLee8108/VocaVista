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
    subMenu: ["Join Community"],
  },
  {
    id: 3,
    menu: "HELP & FAQ",
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
];

export { navbarList, feature, testimonial, course };
